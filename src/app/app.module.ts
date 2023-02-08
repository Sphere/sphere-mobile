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
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs'
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetResolverModule } from '@ws-widget/resolver'
import {  WIDGET_REGISTERED_MODULES, WIDGET_REGISTRATION_CONFIG } from '@ws-widget/collection'
import {  ImageCropModule, LoggerService, PipeSafeSanitizerModule } from '@ws-widget/utils'
import { InitService } from './services/init.service';
import { AuthKeycloakService } from '../../library/ws-widget/utils/src/lib/services/auth-keycloak.service'
import { PublicModule } from './modules/public/public.module';
import { CoreModule } from './modules/core/core.module';
import { SearchModule } from '@ws/app/src/public-api'
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { HomeModule } from './modules/home/home.module';
import { TncRendererComponent } from './components/tnc-renderer/tnc-renderer.component';
import { NewTncComponent } from './routes/new-tnc/new-tnc.component';
import { TncAppResolverService } from './services/tnc-app-resolver.service';
import { TncPublicResolverService } from './services/tnc-public-resolver.service';
const appInitFactory = (initSvc: InitService, logger: LoggerService)=> async()=>{
  try {
    await initSvc.init()
  } catch (error) {
    logger.error('ERROR DURING APP INITIALIZATION >', error)
  }
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
