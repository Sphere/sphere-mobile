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
