import { IBtnAppsConfig } from '@ws-widget/collection/src/lib/btn-apps/btn-apps.model'
import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges, HostListener, Output, EventEmitter, Inject, NgZone } from '@angular/core'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'
import { ConfigurationsService, NsPage, NsInstanceConfig, ValueService } from '@ws-widget/utils'
import { Observable, Subscription } from 'rxjs'
import { ActivatedRoute, Router } from '@angular/router'
import { NsWidgetResolver } from '@ws-widget/resolver'
import { PreferenceKey, RouterLinks } from '@app/app/app.constant'
import { AppGlobalService, InteractSubtype, Environment, CommonUtilService, FormAndFrameworkUtilService, PageId, SbProgressLoader, TelemetryGeneratorService } from '@app/services'
import { WebviewSessionProviderConfig, WebviewLoginSessionProvider, SignInError, AuthService, SharedPreferences } from '@project-sunbird/sunbird-sdk'
import { InteractType } from '@project-sunbird/sunbird-sdk/telemetry'


@Component({
  selector: 'ws-app-public-nav-bar',
  templateUrl: './app-public-nav-bar.component.html',
  styleUrls: ['./app-public-nav-bar.component.scss'],
})
export class AppPublicNavBarComponent implements OnInit, OnChanges, OnDestroy {
  @Input() mode: 'top' | 'bottom' = 'top'
  @Output() showSignInPage = new EventEmitter()
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
  showSignInCard = false;

  constructor(
    private domSanitizer: DomSanitizer,
    private configSvc: ConfigurationsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private valueSvc: ValueService,
    private appGlobalService: AppGlobalService,
    private commonUtilService: CommonUtilService,
    private telemetryGeneratorService: TelemetryGeneratorService,
    private formAndFrameworkUtilService: FormAndFrameworkUtilService,
    private sbProgressLoader: SbProgressLoader,
    private ngZone: NgZone,
    @Inject('AUTH_SERVICE') private authService: AuthService,
    @Inject('SHARED_PREFERENCES') private preferences: SharedPreferences,
    ) {
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
    this.showSignInCard = true;
    this.showSignInPage.emit(true)
  }

  source = 'profile'

  async signIn(skipNavigation?) {
    this.appGlobalService.resetSavedQuizContent();

    if (!this.commonUtilService.networkInfo.isNetworkAvailable) {
      // this.valueChange.emit(true);
    } else {
      this.telemetryGeneratorService.generateInteractTelemetry(
        InteractType.TOUCH,
        InteractSubtype.SIGNIN_OVERLAY_CLICKED,
        Environment.HOME,
        this.source, null
      );

      this.generateLoginInteractTelemetry(InteractType.TOUCH, InteractSubtype.LOGIN_INITIATE, '');

      const that = this;
      const webviewSessionProviderConfigloader = await this.commonUtilService.getLoader();

      let webviewLoginSessionProviderConfig: WebviewSessionProviderConfig;
      let webviewMigrateSessionProviderConfig: WebviewSessionProviderConfig;

      await webviewSessionProviderConfigloader.present();
      try {
        webviewLoginSessionProviderConfig = await this.formAndFrameworkUtilService.getWebviewSessionProviderConfig('login');
        webviewMigrateSessionProviderConfig = await this.formAndFrameworkUtilService.getWebviewSessionProviderConfig('migrate');
        await webviewSessionProviderConfigloader.dismiss();
      } catch (e) {
        this.sbProgressLoader.hide({ id: 'login' });
        await webviewSessionProviderConfigloader.dismiss();
        this.commonUtilService.showToast('ERROR_WHILE_LOGIN');
        return;
      }
      console.log("AAAAAAAAAAA comes till setsession()")
      this.authService.setSession(
        new WebviewLoginSessionProvider(
          webviewLoginSessionProviderConfig,
          webviewMigrateSessionProviderConfig
        )
      )
        .toPromise()
        .then(async () => {
        })
        .then(async () => {
          if (!this.appGlobalService.signinOnboardingLoader) { }
          that.ngZone.run(() => {
            setTimeout(() => {

              console.log("AAAAAAAAAAA comes after setsession()")
              that.router.navigateByUrl('page/home');
              that.preferences.putString('SHOW_WELCOME_TOAST', 'true').toPromise().then();
            }, 2000);
          });
        })
        .catch(async (err) => {
          this.sbProgressLoader.hide({ id: 'login' });
          if (err instanceof SignInError) {
            this.commonUtilService.showToast(err.message);
          } else {
            this.commonUtilService.showToast('ERROR_WHILE_LOGIN');
          }
        });
    }
  }

  private generateLoginInteractTelemetry(interactType, interactSubtype, uid) {
    const valuesMap = new Map();
    valuesMap['UID'] = uid;
    this.telemetryGeneratorService.generateInteractTelemetry(
      interactType,
      interactSubtype,
      Environment.HOME,
      PageId.LOGIN,
      undefined,
      valuesMap);
  }

  ngOnDestroy() {
    if (this.subscriptionLogin) {
      this.subscriptionLogin.unsubscribe()
    }
  }
}
