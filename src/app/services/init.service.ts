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
import { environment } from '../../environments/environment'
/* tslint:disable */
import  hostConfig from '../../assets/configuration/host.config.json';
import appsConfig from '../../assets/configuration/apps.json';
import featureConfig from '../../assets/configuration/config.json'
import siteConfig from '../../assets/configuration/site.config.json'
import * as _ from "lodash"
import { map } from 'rxjs/operators'
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(
    private logger: LoggerService,
    private configSvc: ConfigurationsService,
    private widgetResolverService: WidgetResolverService,
    domSanitizer: DomSanitizer
  ) { }
  async init() {
    await this.fetchDefaultConfig()
    const appConfig = appsConfig as any
    this.configSvc.appsConfig = this.processAppsConfig(appConfig)
    
    await this.fetchInstanceConfig() 
    await this.fetchFeaturesStatus()
    console.log(this.configSvc)
    const widgetConfig:any = []
    this.processWidgetStatus(widgetConfig)
    this.widgetResolverService.initialize(
      this.configSvc.restrictedWidgets,
      this.configSvc.userRoles,
      this.configSvc.userGroups,
      this.configSvc.restrictedFeatures,
    )
    this.updateNavConfig()
    this.configSvc.unMappedUser = {"id":"fc7a6dd1-313e-48e0-beba-1faee25e170b","userId":"fc7a6dd1-313e-48e0-beba-1faee25e170b","personalDetails":{"firstname":"aman5","surname":"sharma","about":"i am senior software enginner in this organigation","photo":"data:image/jpeg;base64,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","dob":"11-02-1989","nationality":"indian","domicileMedium":"hindi","regNurseRegMidwifeNumber":"dfdf","gender":"Male","mobile":"7250038764","primaryEmail":"am****@yopmail.com","postalAddress":"17 th","pincode":"560029"},"academics":[{"nameOfQualification":"","type":"X_STANDARD","nameOfInstitute":"High School Shahkund","yearOfPassing":"2003"},{"nameOfQualification":"","type":"XII_STANDARD","nameOfInstitute":"T.N.B college Bhagalpur","yearOfPassing":"2005"},{"nameOfQualification":"","type":"GRADUATE","nameOfInstitute":"NIT","yearOfPassing":"2012"},{"nameOfQualification":"","type":"POSTGRADUATE","nameOfInstitute":"NIT","yearOfPassing":"2015"}],"employmentDetails":{"service":"","cadre":"","allotmentYearOfService":"","dojOfService":"","payType":"","civilListNo":"","employeeCode":"","officialPostalAddress":"","pinCode":""},"professionalDetails":[{"orgType":"NGO","professionOtherSpecify":"AWW","orgOtherSpecify":"awn","name":"astrika t","designation":"AWW","profession":"Others","location":"Bihar","responsibilities":"","doj":"02-11-1989","completePostalAddress":"","additionalAttributes":{}}],"skills":{"additionalSkills":"","certificateDetails":""},"interests":{"professional":"","hobbies":""}}
    this.configSvc.userProfile = {userId:'fc7a6dd1-313e-48e0-beba-1faee25e170b'}

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
    this.configSvc.restrictedFeatures = new Set(
      Object.entries(featureConfigs)
        .filter(
          ([_k, v]) => !hasPermissions(v, this.configSvc.userRoles, this.configSvc.userGroups),
        )
        .map(([k]) => k),
    )
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
