// Angular dependencies
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ionic cordova dependencies/plugins
import { SegmentationTagService } from '@app/services/segmentation-tag/segmentation-tag.service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Device } from '@ionic-native/device/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import { ReactiveFormsModule } from '@angular/forms';
// ionic cordova dependencies/plugins
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Network } from '@ionic-native/network/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// 3rd party dependencies
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CsContentType } from '@project-sunbird/client-services/services/content';
import { QuestionCursor } from '@project-sunbird/sunbird-quml-player-v9';
// app dependencies like directive, sdk, services etc
import { SunbirdSdk } from 'sunbird-sdk';
import { QumlPlayerService } from '@app/services/quml-player/quml-player.service';
import { DirectivesModule } from '../directives/directives.module';
import {
  ActivePageService, AndroidPermissionsService, AppGlobalService,
  AppHeaderService,
  AppRatingService,
  CanvasPlayerService,
  CollectionService, ComingSoonMessageService, CommonUtilService,
  ContainerService,
  ContentAggregatorHandler, CourseUtilService,
  FormAndFrameworkUtilService,
  GroupHandlerService, LoginHandlerService, LogoutHandlerService,
  NotificationService, QRScannerResultHandler,
  SplashScreenService, SunbirdQRScanner, TelemetryGeneratorService,
  UtilityService
} from '../services/index';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PageFilterOptionsPageModule } from './page-filter/page-filter-options/page-filter-options.module';
import { PageFilterOptionsPage } from './page-filter/page-filter-options/page-filter-options.page';
import { PageFilterPageModule } from './page-filter/page-filter.module';
import { PageFilterPage } from './page-filter/page-filter.page';
import { TermsAndConditionsPageModule } from './terms-and-conditions/terms-and-conditions.module';
import { TncUpdateHandlerService } from '@app/services/handlers/tnc-update-handler.service';
import {
  SplashcreenTelemetryActionHandlerDelegate
} from '@app/services/sunbird-splashscreen/splashcreen-telemetry-action-handler-delegate';
import { SplashscreenImportActionHandlerDelegate } from '@app/services/sunbird-splashscreen/splashscreen-import-action-handler-delegate';
import { SplaschreenDeeplinkActionHandlerDelegate } from '@app/services/sunbird-splashscreen/splaschreen-deeplink-action-handler-delegate';
import { LocalCourseService } from '@app/services/local-course.service';
import { ExternalIdVerificationService } from '@app/services/externalid-verification.service';
import { TextbookTocService } from '@app/app/collection-detail-etb/textbook-toc-service';
import { NativePageTransitions } from '@ionic-native/native-page-transitions/ngx';
import { NavigationService } from '@app/services/navigation-handler.service';
import {AliasBoardName} from '../pipes/alias-board-name/alias-board-name';
import { DownloadPdfService } from '@app/services/download-pdf/download-pdf.service';
import {ConsentService} from '@app/services/consent-service';
import { ProfileHandler } from '@app/services/profile-handler';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Chooser } from '@ionic-native/chooser/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import {configuration} from '@app/configuration/configuration';
import { LocationHandler } from '@app/services/location-handler';
import { CoreModule } from './manage-learn/core/core.module';
import { DiscussionTelemetryService } from '@app/services/discussion/discussion-telemetry.service';
import { UserTypeSelectionPageModule } from './user-type-selection/user-type-selection.module';
import { RouteReuseStrategy } from '@angular/router';
import { CrashAnalyticsErrorLogger } from '@app/services/crash-analytics/crash-analytics-error-logger';
import { PrintPdfService } from '@app/services/print-pdf/print-pdf.service';
import {UpdateProfileService} from '@app/services/update-profile-service';
import { SbSearchFilterModule } from 'common-form-elements';
import {LoginNavigationHandlerService} from '@app/services/login-navigation-handler.service';
import { StoragePermissionHandlerService } from '@app/services/storage-permission/storage-permission-handler.service';
import { TranslateJsonPipe } from '@app/pipes/translate-json/translate-json';
import { OnboardingConfigurationService } from '@app/services/onboarding-configuration.service';
import onboarding from './../assets/configurations/config.json';
// AoT requires an exported function for factories

// import for sphere app 
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
import { MatSnackBarModule } from '@angular/material';
import { WidgetResolverModule } from '@ws-widget/resolver'
import {  WIDGET_REGISTERED_MODULES, WIDGET_REGISTRATION_CONFIG } from '@ws-widget/collection'
import {  ImageCropModule, LoggerService, PipeSafeSanitizerModule } from '@ws-widget/utils'
import { InitService } from '../services/init.service';
import { AuthKeycloakService } from '../../library/ws-widget/utils/src/lib/services/auth-keycloak.service'
import { PublicModule } from './modules/public/public.module';
import { CoreModule  as SpherCoreModule} from '../app/modules/core/core.module';
import { AppTocModule, SearchModule } from '@ws/app/src/public-api'
import { HomeModule } from './modules/home/home.module';

export function translateHttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

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
  },{
    provide: 'NOTIFICATION_SERVICE_V2',
    useFactory: notificationServiceV2
  },{
    provide: 'CERTIFICATE_SERVICE',
    useFactory: certificateService
  }];
}
import { SunbirdSdk } from 'sunbird-sdk';
import { ForgotPasswordComponent } from './modules/public/components/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { SunbirdSdk } from 'sunbird-sdk';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [PageFilterPage, PageFilterOptionsPage],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
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
    PublicModule,
    SearchModule,
    CoreModule,
    HomeModule,
    AppTocModule,
    ReactiveFormsModule,
    WidgetResolverModule.forRoot(WIDGET_REGISTRATION_CONFIG),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (translateHttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot({
      scrollPadding: false,
      scrollAssist: true,
      // autoFocusAssist: false
    }),
    DirectivesModule,

    // custom modules=
    UserTypeSelectionPageModule,
    PageFilterPageModule,
    PageFilterOptionsPageModule,
    TermsAndConditionsPageModule,
    IonicStorageModule.forRoot(),
    CoreModule,
    HomeModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitFactory,
      deps: [InitService, LoggerService],
      multi: true,
    },
    AuthKeycloakService,
    TncPublicResolverService,
    TncAppResolverService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  constructor(
    private translate: TranslateService) {
    this.setDefaultLanguage();
    console.log('Onboarding Config', onboarding);
    
  }

  private setDefaultLanguage() {
    this.translate.setDefaultLang('en');
  }
}
