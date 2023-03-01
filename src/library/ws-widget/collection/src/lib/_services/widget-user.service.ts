import { Inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { IUserGroupDetails } from './widget-user.model'
import { CordovaHttpService } from '@app/app/modules/core/services/cordova-http.service'
import { AuthService, DeviceInfo, SharedPreferences } from 'sunbird-sdk';
import { ApiUtilsService, ToastService } from '@app/app/manage-learn/core'
import { ModalController } from '@ionic/angular'
import { UtilityService } from '@app/services'
import { HTTP } from '@ionic-native/http/ngx'

const PROTECTED_SLAG_V8 = '/apis/protected/v8'
const API_END_POINTS = {
  FETCH_USER_GROUPS: (userId: string) =>
    `${PROTECTED_SLAG_V8}/user/group/fetchUserGroup?userId=${userId}`,
  FETCH_USER_ENROLLMENT_LIST: (userId: string | undefined) =>
    // tslint:disable-next-line: max-line-length
    `/apis/proxies/v8/learner/course/v1/user/enrollment/list/${userId}?orgdetails=orgName,email&licenseDetails=name,description,url&fields=contentType,topic,name,channel,mimeType,appIcon,gradeLevel,resourceType,identifier,medium,pkgVersion,thumbnail,board,subject,trackable,posterImage,duration,creatorLogo,license&batchDetails=name,endDate,startDate,status,enrollmentType,createdBy,certificates`,
  // tslint:disable-next-line:max-line-length
  FETCH_USER_ENROLLMENT_LIST_V2: (userId: string | undefined, orgdetails: string, licenseDetails: string, fields: string, batchDetails: string) =>
    // tslint:disable-next-line:max-line-length
    `/apis/proxies/v8/learner/course/v1/user/enrollment/list/${userId}?orgdetails=${orgdetails}&licenseDetails=${licenseDetails}&fields=${fields}&batchDetails=${batchDetails}`,
}

@Injectable({
  providedIn: 'root',
})
export class WidgetUserService extends CordovaHttpService {
  constructor(public http: HttpClient,
    public toast: ToastService,
    public modalController: ModalController,
    @Inject('AUTH_SERVICE') public authService: AuthService,
    @Inject('DEVICE_INFO') public deviceInfo: DeviceInfo,
    @Inject('SHARED_PREFERENCES') public preferences : SharedPreferences,
    private utils: ApiUtilsService,
    public ionicHttp:HTTP,
    public utilityService: UtilityService,
    ) {
      super(http, toast, modalController, authService, deviceInfo, preferences, utils,ionicHttp,utilityService);
  }

  // handleError(error: ErrorEvent) {
  //   let errorMessage = ''
  //   if (error.error instanceof ErrorEvent) {
  //     errorMessage = `Error: ${error.error.message}`
  //   }
  //   return throwError(errorMessage)
  // }

  fetchUserGroupDetails(userId: string): Observable<IUserGroupDetails[]> {
    const options = {
      url: API_END_POINTS.FETCH_USER_GROUPS(userId),
    };
    return this.get(options)
      // .pipe(catchError(this.handleError))
  }

  // fetchUserBatchList(userId: string | undefined): Observable<NsContent.ICourse[]> {
  //   return this.http
  //     .get(API_END_POINTS.FETCH_USER_ENROLLMENT_LIST(userId))
  //     .pipe(
  //       catchError(this.handleError),
  //       map(
  //         (data: any) => data.result.courses
  //       )
  //     )
  // }
  // tslint:disable-next-line:max-line-length

  fetchUserBatchList(userId: string | undefined, queryParams?: { orgdetails: any, licenseDetails: any, fields: any, batchDetails: any }) {
    const requestParam = {
      url: '',
    };

    if (queryParams) {
      requestParam.url = API_END_POINTS.FETCH_USER_ENROLLMENT_LIST_V2(userId, queryParams.orgdetails, queryParams.licenseDetails, queryParams.fields, queryParams.batchDetails)
    } else {
      requestParam.url = API_END_POINTS.FETCH_USER_ENROLLMENT_LIST(userId)
    }
    return this.get(requestParam)
      .pipe(
        // catchError(this.handleError),
        map(
          (data: any) => data.result.courses
        )
      )
  }

}
