import { APP_INITIALIZER, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { KeycloakAngularModule } from 'keycloak-angular'
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatMenuModule,
  MatProgressBarModule,
  MatGridListModule,
  MatRippleModule,
  MatSliderModule,
  MatToolbarModule,
  MatTooltipModule,
  MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
} from '@angular/material'
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetResolverModule } from '@ws-widget/resolver'
import { WIDGET_REGISTERED_MODULES, WIDGET_REGISTRATION_CONFIG } from '@ws-widget/collection'
import { ImageCropModule, LoggerService, PipeSafeSanitizerModule } from '@ws-widget/utils'
import { InitService } from './services/init.service';
import { AuthKeycloakService } from '../../library/ws-widget/utils/src/lib/services/auth-keycloak.service'
import { PublicModule } from './modules/public/public.module';
import { CoreModule } from './modules/core/core.module';
import { AppTocModule, SearchModule } from '@ws/app/src/public-api'
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { HomeModule } from './modules/home/home.module';
import { TncRendererComponent } from './components/tnc-renderer/tnc-renderer.component';
import { NewTncComponent } from './routes/new-tnc/new-tnc.component';
import { TncAppResolverService } from './services/tnc-app-resolver.service';
import { TncPublicResolverService } from './services/tnc-public-resolver.service';
const appInitFactory = (initSvc: InitService, logger: LoggerService) => async () => {
  try {
    await initSvc.init()
  } catch (error) {
    logger.error('ERROR DURING APP INITIALIZATION >', error)
  }
}
import { SunbirdSdk } from 'sunbird-sdk';
import { ForgotPasswordComponent } from './modules/public/components/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { getBaseHref } from '@ws/author/src/public-api';
import { CsContentType } from '@project-sunbird/client-services/services/content';
import { configuration } from 'src/configuration/configuration.debug';
// export function translateHttpLoaderFactory(httpClient: HttpClient) {
//   return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
// }

export const authService = () => {
  return SunbirdSdk.instance.authService;
};
export const pageAssembleService = () => {
  return SunbirdSdk.instance.pageAssembleService;
};
export const dbService = () => {
  return SunbirdSdk.instance.dbService;
};
export const courseService = () => {
  return SunbirdSdk.instance.courseService;
};
export const sharedPreferences = () => {
  return SunbirdSdk.instance.sharedPreferences;
};
export const apiService = () => {
  return SunbirdSdk.instance.apiService;
};
export const profileService = () => {
  return SunbirdSdk.instance.profileService;
};
export const deviceRegisterService = () => {
  return SunbirdSdk.instance.deviceRegisterService;
};
export const groupService = () => {
  return SunbirdSdk.instance.groupService;
};
export const frameworkService = () => {
  return SunbirdSdk.instance.frameworkService;
};
export const frameworkUtilService = () => {
  return SunbirdSdk.instance.frameworkUtilService;
};
export const systemSettingsService = () => {
  return SunbirdSdk.instance.systemSettingsService;
};
export const telemetryService = () => {
  return SunbirdSdk.instance.telemetryService;
};
export const contentService = () => {
  return SunbirdSdk.instance.contentService;
};
export const contentFeedbackService = () => {
  return SunbirdSdk.instance.contentFeedbackService;
};
export const eventsBusService = () => {
  return SunbirdSdk.instance.eventsBusService;
};
export const deviceInfo = () => {
  return SunbirdSdk.instance.deviceInfo;
};
export const playerService = () => {
  return SunbirdSdk.instance.playerService;
};
export const formService = () => {
  return SunbirdSdk.instance.formService;
};
export const downloadService = () => {
  return SunbirdSdk.instance.downloadService;
};

export function storageService() {
  return SunbirdSdk.instance.storageService;
}
export function notificationService() {
  return SunbirdSdk.instance.notificationService;
}
export function errorLoggerService() {
  return SunbirdSdk.instance.errorLoggerService;
}
export function searchHistoryService() {
  return SunbirdSdk.instance.searchHistoryService;
}
export function networkInfoService() {
  return SunbirdSdk.instance.networkInfoService;
}
export function codePushExperimentService() {
  return SunbirdSdk.instance.codePushExperimentService;
}
export function faqService() {
  return SunbirdSdk.instance.faqService;
}
export function archiveService() {
  return SunbirdSdk.instance.archiveService;
}
export const discussionService = () => {
  return SunbirdSdk.instance.discussionService;
};
export const segmentationService = () => {
  return SunbirdSdk.instance.segmentationService;
};

export const debuggingService = () => {
  return SunbirdSdk.instance.debuggingService;
};

export const notificationServiceV2 = () => {
  return SunbirdSdk.instance.notificationServiceV2;
};

export const certificateService = () => {
  return SunbirdSdk.instance.certificateService;
};

export function sdkDriverFactory(): any {
  return [{
    provide: 'SDK_CONFIG',
    useFactory: authService
  }, {
    provide: 'AUTH_SERVICE',
    useFactory: authService
  }, {
    provide: 'DB_SERVICE',
    useFactory: dbService
  }, {
    provide: 'COURSE_SERVICE',
    useFactory: courseService
  }, {
    provide: 'SHARED_PREFERENCES',
    useFactory: sharedPreferences
  }, {
    provide: 'API_SERVICE',
    useFactory: apiService
  }, {
    provide: 'PAGE_ASSEMBLE_SERVICE',
    useFactory: pageAssembleService
  }, {
    provide: 'GROUP_SERVICE',
    useFactory: groupService
  }, {
    provide: 'PROFILE_SERVICE',
    useFactory: profileService
  }, {
    provide: 'DEVICE_REGISTER_SERVICE',
    useFactory: deviceRegisterService
  }, {
    provide: 'DB_SERVICE',
    useFactory: dbService
  }, {
    provide: 'FRAMEWORK_SERVICE',
    useFactory: frameworkService
  }, {
    provide: 'FRAMEWORK_UTIL_SERVICE',
    useFactory: frameworkUtilService
  }, {
    provide: 'PAGE_ASSEMBLE_SERVICE',
    useFactory: pageAssembleService
  }, {
    provide: 'FORM_SERVICE',
    useFactory: formService
  }, {
    provide: 'SYSTEM_SETTINGS_SERVICE',
    useFactory: systemSettingsService
  }, {
    provide: 'TELEMETRY_SERVICE',
    useFactory: telemetryService
  }, {
    provide: 'CONTENT_SERVICE',
    useFactory: contentService
  }, {
    provide: 'CONTENT_FEEDBACK_SERVICE',
    useFactory: contentFeedbackService
  }, {
    provide: 'EVENTS_BUS_SERVICE',
    useFactory: eventsBusService
  }, {
    provide: 'DEVICE_INFO',
    useFactory: deviceInfo
  }, {
    provide: 'PLAYER_SERVICE',
    useFactory: playerService
  }, {
    provide: 'DOWNLOAD_SERVICE',
    useFactory: downloadService
  }, {
    provide: 'STORAGE_SERVICE',
    useFactory: storageService
  }, {
    provide: 'NOTIFICATION_SERVICE',
    useFactory: notificationService
  }, {
    provide: 'ERROR_LOGGER_SERVICE',
    useFactory: errorLoggerService
  }, {
    provide: 'SEARCH_HISTORY_SERVICE',
    useFactory: searchHistoryService
  }, {
    provide: 'CODEPUSH_EXPERIMENT_SERVICE',
    useFactory: codePushExperimentService
  }, {
    provide: 'NETWORK_INFO_SERVICE',
    useFactory: networkInfoService
  }, {
    provide: 'FAQ_SERVICE',
    useFactory: faqService
  }, {
    provide: 'ARCHIVE_SERVICE',
    useFactory: archiveService
  }, {
    provide: 'DISCUSSION_SERVICE',
    useFactory: discussionService
  }, {
    provide: 'SEGMENTATION_SERVICE',
    useFactory: segmentationService
  }, {
    provide: 'DEBUGGING_SERVICE',
    useFactory: debuggingService
  }, {
    provide: 'NOTIFICATION_SERVICE_V2',
    useFactory: notificationServiceV2
  }, {
    provide: 'CERTIFICATE_SERVICE',
    useFactory: certificateService
  }];
}

export const sunbirdSdkServicesProvidersFactory: () => Provider[] = sdkDriverFactory;

export const sunbirdSdkFactory =
  () => {
    return async () => {
      await SunbirdSdk.instance.init({
        platform: 'cordova',
        fileConfig: {
        },
        apiConfig: {
          debugMode: configuration.debug,
          host: 'https://sphere.aastrika.org',
          user_authentication: {
            redirectUrl: 'sphere.aastrika.org://mobile',
            authUrl: '/auth/realms/sunbird/protocol/openid-connect',
            mergeUserHost: 'https://merge.staging.ntp.net.in',
            autoMergeApiPath: '/migrate/user/account'
          },
          api_authentication: {
            mobileAppKey: 'android',
            mobileAppSecret: '653b42a8-1f53-4dbe-8ace-e68881d9b0d7',
            mobileAppConsumer: '"mobile_device"',
            channelId: '0132317968766894088',
            producerId: 'sphere.aastrika.org',
            producerUniqueId: 'sunbird.app'
          },
          cached_requests: {
            timeToLive: 2 * 60 * 60 * 1000
          }
        },
        eventsBusConfig: {
          debugMode: true
        },
        dbConfig: {
          dbName: 'GenieServices.db'
        },
        deviceRegisterConfig: {
          apiPath: '/api/v3/device'
        },
        contentServiceConfig: {
          apiPath: '/api/content/v2',
          searchApiPath: '/api/content/v1',
          contentHeirarchyAPIPath: '/api/collection/v1',
          questionSetReadApiPath: '/api/questionset/v1',
          questionReadApiPath: '/api/question/v1/'
        },
        courseServiceConfig: {
          apiPath: '/api/course/v1'
        },
        formServiceConfig: {
          apiPath: '/api/data/v1/form',
          formConfigDirPath: '/data/form',
        },
        frameworkServiceConfig: {
          channelApiPath: '/api/channel/v1',
          frameworkApiPath: '/api/framework/v1',
          frameworkConfigDirPath: '/data/framework',
          channelConfigDirPath: '/data/channel',
          searchOrganizationApiPath: '/api/org/v2',
          systemSettingsDefaultChannelIdKey: 'custodianOrgId',
          overriddenDefaultChannelId: ''
        },
        profileServiceConfig: {
          profileApiPath: '/api/user/v1',
          profileApiPath_V2: '/api/user/v2',
          profileApiPath_V5: '/api/user/v5',
          tenantApiPath: '/v1/tenant',
          otpApiPath: '/api/otp/v2',
          searchLocationApiPath: '/api/data/v1',
          locationDirPath: '/data/location'
        },
        pageServiceConfig: {
          apiPath: '/api/data/v1',
        },
        appConfig: {
          maxCompatibilityLevel: 5,
          minCompatibilityLevel: 1
        },
        systemSettingsConfig: {
          systemSettingsApiPath: '/api/data/v1',
          systemSettingsDirPath: '/data/system',
        },
        telemetryConfig: {
          apiPath: '/api/data/v1',
          telemetrySyncBandwidth: 200,
          telemetrySyncThreshold: 200,
          telemetryLogMinAllowedOffset: 86400000
        },
        sharedPreferencesConfig: {
        },
        certificateServiceConfig: {
          apiPath: '/api/certreg/v2',
          apiPathLegacy: '/api/certreg/v1',
          rcApiPath: '/api/rc/${schemaName}/v1',
        },
        playerConfig: {
          showEndPage: false,
          endPage: [{
            template: 'assessment',
            contentType: [CsContentType.SELF_ASSESS]
          }],
          splash: {
            webLink: '',
            text: '',
            icon: '',
            bgImage: 'assets/icons/splacebackground_1.png'
          },
          overlay: {
            enableUserSwitcher: false,
            showUser: false
          },
          plugins: [
            {
              id: 'org.sunbird.player.endpage',
              ver: '1.1',
              type: 'plugin'
            }
          ]
        },
        errorLoggerConfig: {
          errorLoggerApiPath: '/api/data/v1/client/logs'
        },
        faqServiceConfig: {
          faqConfigDirPath: '/data/faq'
        }
      });

      window['sunbird'] = SunbirdSdk.instance;
    };
  };
@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    ForgotPasswordComponent,
    NewTncComponent,
    TncRendererComponent,
  ],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatRippleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatSnackBarModule,
    AppRoutingModule,
    ComponentsModule,
    ImageCropModule,
    PipeSafeSanitizerModule,
    KeycloakAngularModule,
    IonicModule.forRoot(),
    ...WIDGET_REGISTERED_MODULES,
    WidgetResolverModule.forRoot(WIDGET_REGISTRATION_CONFIG),
    PublicModule,
    SearchModule,
    CoreModule,
    HomeModule,
    ReactiveFormsModule,
    AppTocModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ...sunbirdSdkServicesProvidersFactory(),
  { provide: APP_INITIALIZER, useFactory: sunbirdSdkFactory, deps: [], multi: true },
    {
    provide: APP_INITIALIZER,
    useFactory: appInitFactory,
    deps: [InitService, LoggerService],
    multi: true,
  },
  
  {
    provide: APP_BASE_HREF,
    useFactory: getBaseHref,
    deps: [PlatformLocation],
  },
    AuthKeycloakService,
    TncPublicResolverService,
    TncAppResolverService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }