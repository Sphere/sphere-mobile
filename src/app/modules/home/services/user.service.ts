import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ServerProfileDetailsRequest } from '@project-sunbird/sunbird-sdk/profile';
import { CordovaHttpService } from '../../core/services/cordova-http.service';

import { RequestParams } from '@app/app/manage-learn/core/interfaces/request-params';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController } from '@ionic/angular';
import { AuthService, DeviceInfo, SharedPreferences } from 'sunbird-sdk';
import { ToastService } from '@app/app/manage-learn/core/services/toast/toast.service';
import { ApiUtilsService } from '@app/app/manage-learn/core/services/api-utils.service';
import { UtilityService } from '@app/services/utility-service';
const API_END_POINTS = {
  USER_READ: (userId: string | undefined) =>`/api/user/v2/read/${userId}`
}
@Injectable({
  providedIn: 'root'
})
export class UserService extends CordovaHttpService{

  constructor(
    public http: HttpClient,
    public toast: ToastService,
    public modalController: ModalController,
    @Inject('AUTH_SERVICE') public authService: AuthService,
    @Inject('DEVICE_INFO') public deviceInfo: DeviceInfo,
    @Inject('SHARED_PREFERENCES') public preferences : SharedPreferences,
    private utils: ApiUtilsService,
    public ionicHttp:HTTP,
    public utilityService: UtilityService,
  ) { 
    super(http, toast, modalController, authService, deviceInfo,preferences, utils,ionicHttp,utilityService);
    !this.baseUrl ? this.utilityService.getBuildConfigValue('BASE_URL').then((url) => (this.baseUrl = url)) :'';
  }

  userRead(userId) {
    const requestParam = {
      url: API_END_POINTS.USER_READ(userId),
    };
    return this.get(requestParam)
  }
}
