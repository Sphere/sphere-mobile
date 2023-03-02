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
import { ConfigurationsService } from '@ws-widget/utils'
import * as _ from "lodash"
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
const API_END_POINTS = {
  USER_READ: (userId: string | undefined) => `api/user/v2/read/${userId}`
}
@Injectable({
  providedIn: 'root'
})
export class UserService extends CordovaHttpService {
  public _updateValue = new BehaviorSubject<any>(undefined)
  updateValue$ = this._updateValue.asObservable()
  constructor(
    public http: HttpClient,
    public toast: ToastService,
    public modalController: ModalController,
    @Inject('AUTH_SERVICE') public authService: AuthService,
    @Inject('DEVICE_INFO') public deviceInfo: DeviceInfo,
    @Inject('SHARED_PREFERENCES') public preferences: SharedPreferences,
    private utils: ApiUtilsService,
    public ionicHttp: HTTP,
    public utilityService: UtilityService,
    public configSvc: ConfigurationsService,
  ) {
    super(http, toast, modalController, authService, deviceInfo, preferences, utils, ionicHttp, utilityService);
    !this.baseUrl ? this.utilityService.getBuildConfigValue('BASE_URL').then((url) => (this.baseUrl = url)) : '';
  }

  userRead(userId) {
    const requestParam = {
      url: API_END_POINTS.USER_READ(userId),
    };
    return this.get(requestParam)
  }

  setConfigService(userPidProfile: any) {
    console.log(userPidProfile)
    if (userPidProfile && userPidProfile.roles && userPidProfile.roles.length > 0 &&
      this.hasRole(userPidProfile.roles)) {
      this.configSvc.unMappedUser = userPidProfile
      const profileV = _.get(userPidProfile, 'profileDetails.profileReq')
      this.configSvc.userProfile = {
        country: _.get(profileV, 'personalDetails.countryCode') || null,
        email: _.get(profileV, 'profileDetails.officialEmail') || userPidProfile.email,
        givenName: userPidProfile.firstName,
        userId: userPidProfile.userId,
        firstName: userPidProfile.firstName,
        lastName: userPidProfile.lastName,
        rootOrgId: userPidProfile.rootOrgId,
        rootOrgName: userPidProfile.channel,
        // tslint:disable-next-line: max-line-length
        // userName: `${userPidProfile.firstName ? userPidProfile.firstName : ' '}${userPidProfile.lastName ? userPidProfile.lastName : ' '}`,
        userName: userPidProfile.userName,
        profileImage: userPidProfile.thumbnail,
        departmentName: userPidProfile.channel,
        dealerCode: null,
        isManager: false,
        phone: _.get(userPidProfile, 'phone'),
        language: (userPidProfile.profileDetails && userPidProfile.profileDetails.preferences && userPidProfile.profileDetails.preferences.language !== undefined) ? userPidProfile.profileDetails.preferences.language : 'en',
      }
      if (!this.configSvc.nodebbUserProfile) {
        this.configSvc.nodebbUserProfile = {
          username: userPidProfile.userName,
          email: 'null',
        }
      }
    }
    const details = {
      group: [],
      profileDetailsStatus: !!_.get(userPidProfile, 'profileDetails.mandatoryFieldsExists'),
      roles: (userPidProfile.roles || []).map((v: { toLowerCase: () => void }) => v.toLowerCase()),
      tncStatus: !(_.isUndefined(this.configSvc.unMappedUser)),
      isActive: !!!userPidProfile.isDeleted,
    }
    this.configSvc.hasAcceptedTnc = details.tncStatus
    this.configSvc.profileDetailsStatus = details.profileDetailsStatus
    this.configSvc.userGroups = new Set(details.group)
    this.configSvc.userRoles = new Set((details.roles || []).map((v: string) => v.toLowerCase()))
    this.configSvc.isActive = details.isActive
  }
  hasRole(role: string[]): boolean {
    let returnValue = false
    const rolesForCBP: any = ['PUBLIC']
    role.forEach(v => {
      if ((rolesForCBP).includes(v)) {
        returnValue = true
      }
    })
    return returnValue
  }
}
