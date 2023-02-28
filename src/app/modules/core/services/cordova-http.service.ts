import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { RequestParams } from '@app/app/manage-learn/core/interfaces/request-params';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController } from '@ionic/angular';
import { AuthService, DeviceInfo, SharedPreferences } from 'sunbird-sdk';
import * as jwt_decode from "jwt-decode";
import * as moment from 'moment';
import { mergeMap, catchError } from 'rxjs/operators';
import { ToastService } from '@app/app/manage-learn/core/services/toast/toast.service';
import { ApiUtilsService } from '@app/app/manage-learn/core/services/api-utils.service';
import { UtilityService } from './utility-service';

@Injectable({
  providedIn: 'root'
})
export class CordovaHttpService {
  baseUrl: string;
  tokens;
  authToken;
  constructor(
    public http: HttpClient,
    public toast: ToastService,
    public modalController: ModalController,
    @Inject('AUTH_SERVICE') public authService: AuthService,
    @Inject('DEVICE_INFO') public deviceInfo: DeviceInfo,
    @Inject('SHARED_PREFERENCES') public preferences: SharedPreferences,
    public apiUtils: ApiUtilsService,
    public ionicHttp: HTTP,
    public utilityService:UtilityService,
  ) {
    this.getToken();
    this.utilityService.getBuildConfigValue('BASE_URL').then((url)=>{
      console.log('url here>>>>>>>>>>>>', url)
      this.baseUrl = url 
    })
    this.baseUrl = 'https://sphere.aastrika.org/'
  }

  setHeaders(session) {
    const headers = {
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTNHNNVFdjZUZqYkxUWGxiczkzUzk4dmFtODBhdkRPUiJ9.nPOCY0-bVX28iNcxxnYbGpihY3ZzfNwx0-SFCnJwjas`,
      
      'X-authenticated-user-token': session ? session.access_token : '',
      'Content-Type': 'application/json',
     
    }
    console.log(">>>>>>>>>>>>",this.authToken)
    if(!session?.access_token){
      delete headers['X-authenticated-user-token'];
      delete headers['x-auth-token']
    }
    return headers;
  }

  get(requestParam: RequestParams): Observable<any> {
    console.log(this.baseUrl)
    return this.checkTokenValidation().pipe(
      mergeMap(session => {
        const headers = session ? this.setHeaders(session) : {};
          this.ionicHttp.setDataSerializer('json');
          return this.ionicHttp.get(this.baseUrl + requestParam.url, '', headers).then(
            data => {
              return JSON.parse(data.data);
            }, error => {
              catchError(this.handleError(error))
            },
          );
      })
    )
  }

  checkTokenValidation(): Observable<any> {
    return this.authService.getSession().pipe(
      mergeMap(tokens => {
        if(tokens){
          const token = jwt_decode(tokens.access_token);
          const tokenExpiryTime = moment(token.exp * 1000);
          const currentTime = moment(Date.now());
          const duration = moment.duration(tokenExpiryTime.diff(currentTime));
          const hourDifference = duration.asHours();
          if (hourDifference < 2) {
            return this.authService.refreshSession().pipe(
              mergeMap(refreshData => {
                return this.authService.getSession()
              })
            )
          } else {
            return this.authService.getSession()
          }
        }else{
          return observableOf({})
        }
      })
    )
  }

  getToken() {
    this.preferences.getString('api_bearer_token_v2').subscribe(resp => {
      this.authToken = `Bearer ${resp}`;
    });
  }

  post(requestParam: RequestParams): Observable<any> {
    return this.checkTokenValidation().pipe(
      mergeMap(session => {
        const headers = session ? this.setHeaders(session) :{};
          let body = requestParam.payload ? requestParam.payload : {};
          this.ionicHttp.setDataSerializer('json');
          return this.ionicHttp.post(this.baseUrl + requestParam.url, body, headers).then(
            data => {
              return JSON.parse(data.data);
            }, error => {
              catchError(this.handleError(error))
            });
      })
    )
  }

  delete(requestParam: RequestParams): Observable<any> {
    return this.checkTokenValidation().pipe(
      mergeMap(session => {
        const headers = this.setHeaders(session);
          return this.ionicHttp.delete(this.baseUrl + requestParam.url, '', headers).then(data => {
            return data
          }, error => {
            catchError(this.handleError(error))
          })
      })
    )
  }



  private handleError(result) {
    let status  = result.status <= 0 ? 0 :result.status;
    switch (status) {
      case 0:
        this.toast.showMessage('FRMELEMNTS_MSG_YOU_ARE_WORKING_OFFLINE_TRY_AGAIN', 'danger')
        break
      case 401:
        this.toast.showMessage('Session expired', 'danger')
        break
      default:
        const errorMessage = result.error ? JSON.parse(result.error).message : 'FRMELEMNTS_MSG_SOMETHING_WENT_WRONG'
        this.toast.showMessage(errorMessage, 'danger')

    }
    return (error: any): Observable<any> => {
      return observableOf(result);
    };
  }
}
