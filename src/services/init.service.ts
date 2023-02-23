import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import {
  hasPermissions,
  hasUnitPermission,
  NsWidgetResolver,
  WidgetResolverService,
} from '@ws-widget/resolver'
import {
  ConfigurationsService,
  LoggerService,
  NsAppsConfig,
  NsInstanceConfig,
} from '@ws-widget/utils'
/* tslint:disable */
import  hostConfig from '../assets/configurations/host.config.json';
import appsConfig from '../assets/configurations/apps.json';
import featureConfig from '../assets/configurations/fconfig.json'
import siteConfig from '../assets/configurations/site.config.json'
import * as _ from "lodash"
import { map } from 'rxjs/operators'
import { v4 as uuid } from 'uuid'
import { HttpClient } from '@angular/common/http';
const API_END_POINTS = {
  USER_READ: '/apis/proxies/v8/api/user/v2/read',
}
@Injectable({
  providedIn: 'root'
})
export class InitService {
  
  constructor(
    private logger: LoggerService,
    private configSvc: ConfigurationsService,
    private widgetResolverService: WidgetResolverService,
    domSanitizer: DomSanitizer,
    private http: HttpClient,
  ) { }
  async init() {
    await this.fetchDefaultConfig()
    const appConfig = appsConfig as any
    this.configSvc.appsConfig = this.processAppsConfig(appConfig)
    await this.fetchStartUpDetails()
    await this.fetchInstanceConfig() 
    await this.fetchFeaturesStatus()

    
    
    this.updateNavConfig()
    console.log(this.configSvc)
    const widgetConfig:any = []
    this.processWidgetStatus(widgetConfig)
    this.widgetResolverService.initialize(
      this.configSvc.restrictedWidgets,
      this.configSvc.userRoles,
      this.configSvc.userGroups,
      this.configSvc.restrictedFeatures,
    )
  }
  private async fetchStartUpDetails(): Promise<any> {
    
    if (this.configSvc.instanceConfig ) {
      let userPidProfile: any | null = null
      try {
        userPidProfile = await this.http
          .get<any>(API_END_POINTS.USER_READ)
          .pipe(map((res: any) => res.result.response))
          .toPromise()

        if (userPidProfile && userPidProfile.roles && userPidProfile.roles.length > 0 &&
          this.hasRole(userPidProfile.roles)) {
          
          if (localStorage.getItem('telemetrySessionId')) {
            localStorage.removeItem('telemetrySessionId')
          }
          localStorage.setItem('telemetrySessionId', uuid())
          this.configSvc.unMappedUser = userPidProfile
          const profileV2 = _.get(userPidProfile, 'profileDetails.profileReq')
          this.configSvc.userProfile = {
            country: _.get(profileV2, 'personalDetails.countryCode') || null,
            email: _.get(profileV2, 'profileDetails.officialEmail') || userPidProfile.email,
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
        return details
      } catch (e) {
        
        return e
      }
    } else {
      return { group: [], profileDetailsStatus: true, roles: new Set(['Public']), tncStatus: true, isActive: true }
    }
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
  private async fetchDefaultConfig(): Promise<NsInstanceConfig.IConfig> {

    if ((this.configSvc.userProfile && this.configSvc.userProfile.language === undefined) || (this.configSvc.userProfile && this.configSvc.userProfile.language === 'en')) {
      const publicConfig: any = hostConfig
      this.configSvc.instanceConfig = publicConfig
      this.configSvc.rootOrg = publicConfig.rootOrg
      this.configSvc.org = publicConfig.org
      // TODO: set one org as default org :: use user preference
      this.configSvc.activeOrg = publicConfig.org[0]
      this.configSvc.appSetup = publicConfig.appSetup
      return publicConfig
    } else {
      if (this.configSvc.userProfile === null) {
        const publicConfig: any = hostConfig
        this.configSvc.instanceConfig = publicConfig
        this.configSvc.rootOrg = publicConfig.rootOrg
        this.configSvc.org = publicConfig.org
        // TODO: set one org as default org :: use user preference
        this.configSvc.activeOrg = publicConfig.org[0]
        this.configSvc.appSetup = publicConfig.appSetup
        return publicConfig
      } else {
        const publicConfig: any = hostConfig
        this.configSvc.instanceConfig = publicConfig
        this.configSvc.rootOrg = publicConfig.rootOrg
        this.configSvc.org = publicConfig.org
        // TODO: set one org as default org :: use user preference
        this.configSvc.activeOrg = publicConfig.org[0]
        this.configSvc.appSetup = publicConfig.appSetup
        return publicConfig
      }

    }

  }

  private processAppsConfig(appsConfig: NsAppsConfig.IAppsConfig): NsAppsConfig.IAppsConfig {
    const tourGuide = appsConfig.tourGuide
    const features: { [id: string]: NsAppsConfig.IFeature } = Object.values(
      appsConfig.features,
    ).reduce((map: { [id: string]: NsAppsConfig.IFeature }, feature: NsAppsConfig.IFeature) => {
      if (hasUnitPermission(feature.permission, this.configSvc.restrictedFeatures, true)) {
        map[feature.id] = feature
      }
      return map
      // tslint:disable-next-line: align
    }, {})
    const groups = appsConfig.groups
      .map((group: NsAppsConfig.IGroup) => ({
        ...group,
        featureIds: group.featureIds.filter(id => Boolean(features[id])),
      }))
      .filter(group => group.featureIds.length)
    return { features, groups, tourGuide }
  }

  private async fetchInstanceConfig(): Promise<NsInstanceConfig.IConfig> {
    
    const publicConfig :any = siteConfig
    this.configSvc.instanceConfig = publicConfig
    this.configSvc.rootOrg = publicConfig.rootOrg
    this.configSvc.org = publicConfig.org
    this.configSvc.activeOrg = publicConfig.org[0]
    
    return publicConfig
  }
  private async fetchFeaturesStatus(): Promise<Set<string>> {
    const featureConfigs = featureConfig
    /* this.configSvc.restrictedFeatures = new Set(
      Object.entries(featureConfigs)
        .filter(
          ([_k, v]) => !hasPermissions(v, this.configSvc.userRoles, this.configSvc.userGroups),
        )
        .map(([k]) => k),
    ) */
    return this.configSvc.restrictedFeatures
  }

  private processWidgetStatus(widgetConfigs: NsWidgetResolver.IRegistrationsPermissionConfig[]) {
    this.configSvc.restrictedWidgets = new Set(
      widgetConfigs
        .filter(u =>
          hasPermissions(
            u.widgetPermission,
            this.configSvc.userRoles,
            this.configSvc.userGroups,
            this.configSvc.restrictedFeatures,
          ),
        )
        .map(u => WidgetResolverService.getWidgetKey(u)),
    )
    return this.configSvc.restrictedWidgets
  }


  private updateNavConfig() {
    if (this.configSvc.instanceConfig) {
      const background = this.configSvc.instanceConfig.backgrounds
      if (background.primaryNavBar) {
        this.configSvc.primaryNavBar = background.primaryNavBar
      }
      if (background.pageNavBar) {
        this.configSvc.pageNavBar = background.pageNavBar
      }

      if (this.configSvc.instanceConfig.primaryNavBarConfig) {
        this.configSvc.primaryNavBarConfig = this.configSvc.instanceConfig.primaryNavBarConfig
      }
    }
  }
}
