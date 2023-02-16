import { IBtnAppsConfig } from '../../../../library/ws-widget/collection/src/lib/btn-apps/btn-apps.model'
import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges, HostListener } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { ConfigurationsService, NsPage, NsInstanceConfig, ValueService } from '@ws-widget/utils'
import { Observable, Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { NsWidgetResolver } from '../../../../library/ws-widget/resolver/src/public-api'
import { AuthKeycloakService } from './../../../../library/ws-widget/utils/src/lib/services/auth-keycloak.service'

@Component({
  selector: 'ws-app-public-nav-bar',
  templateUrl: './app-public-nav-bar.component.html',
  styleUrls: ['./app-public-nav-bar.component.scss'],
})
export class AppPublicNavBarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() mode: 'top' | 'bottom' = 'top'
  appIcon: SafeUrl | null = null
  logo = ''
  appName = ''
  navBar: Partial<NsPage.INavBackground> | null = null
  isClientLogin = false
  private subscriptionLogin: Subscription | null = null
  loginConfig: any | null = null
  redirectUrl = ''
  primaryNavbarConfig: NsInstanceConfig.IPrimaryNavbarConfig | null = null
  pageNavbar: Partial<NsPage.INavBackground> | null = null
  featureApps: string[] = []
  appBottomIcon?: SafeUrl
  showCreateBtn = false
  hideCreateButton = true

  basicBtnAppsConfig: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig> = {
    widgetType: 'actionButton',
    widgetSubType: 'actionButtonApps',
    widgetData: { allListingUrl: '/app/features' },
  }
  instanceVal = ''
  btnAppsConfig!: NsWidgetResolver.IRenderConfigWithTypedData<IBtnAppsConfig>
  isXSmall$: Observable<boolean>

  constructor(
    private domSanitizer: DomSanitizer,
    private configSvc: ConfigurationsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private valueSvc: ValueService,
    private authSvc: AuthKeycloakService) {
    this.isXSmall$ = this.valueSvc.isXSmall$
    this.btnAppsConfig = { ...this.basicBtnAppsConfig }
  }

  public get showPublicNavbar(): boolean {
    return true
  }

  async ngOnInit() {
    if (localStorage.getItem('orgValue') === 'nhsrc') {
      this.hideCreateButton = false
    }
    if (this.configSvc.instanceConfig) {
      this.appIcon = this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.configSvc.instanceConfig.logos.app,
      )
      this.appName = this.configSvc.instanceConfig.details.appName
      this.navBar = this.configSvc.pageNavBar
      this.primaryNavbarConfig = this.configSvc.primaryNavBarConfig
    }

    this.valueSvc.isXSmall$.subscribe(isXSmall => {
      if (isXSmall && (this.configSvc.userProfile === null)) {
        this.showCreateBtn = false
      } else {
        this.showCreateBtn = true
      }
    })
    const paramsMap = this.activateRoute.snapshot.queryParamMap
    const href = window.location.href
    if (paramsMap.has('ref')) {
      this.redirectUrl = document.baseURI + paramsMap.get('ref')
    } else if (href.indexOf('org-details') > 0) {
      this.redirectUrl = href
    } else {
      this.redirectUrl = `${document.baseURI}openid/keycloak`
    }

    // added from app nav
    if (this.configSvc.instanceConfig) {
      this.appIcon = this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.configSvc.instanceConfig.logos.app,
      )
      this.instanceVal = this.configSvc.rootOrg || ''
      if (this.configSvc.instanceConfig.logos.appBottomNav) {
        this.appBottomIcon = this.domSanitizer.bypassSecurityTrustResourceUrl(
          this.configSvc.instanceConfig.logos.appBottomNav,
        )
      }
      this.pageNavbar = this.configSvc.pageNavBar
      this.primaryNavbarConfig = this.configSvc.primaryNavBarConfig
    }
    if (this.configSvc.appsConfig) {
      this.featureApps = Object.keys(this.configSvc.appsConfig.features)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const property in changes) {
      if (property === 'mode') {
        if (this.mode === 'bottom') {
          this.btnAppsConfig = {
            ...this.basicBtnAppsConfig,
            widgetData: {
              ...this.basicBtnAppsConfig.widgetData,
              showTitle: true,
            },
          }
        } else {
          this.btnAppsConfig = {
            ...this.basicBtnAppsConfig,
          }
        }
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.valueSvc.isXSmall$.subscribe(isXSmall => {
      if (isXSmall && (this.configSvc.userProfile === null)) {
        this.showCreateBtn = false
      } else {
        this.showCreateBtn = true
      }
    })
  }

  createAcct() {
    this.router.navigateByUrl('app/create-account')
  }
  login(key: 'E' | 'N' | 'S') {
    // if (localStorage.getItem('login_url')) {
    //   const url: any = localStorage.getItem('login_url')
    //   window.location.href = url
    // }
    // this.authSvc.login(key, this.redirectUrl)
    window.location.href = `app/login`
  }

  ngOnDestroy() {
    if (this.subscriptionLogin) {
      this.subscriptionLogin.unsubscribe()
    }
  }
}