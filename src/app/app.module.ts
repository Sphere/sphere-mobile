// Angular dependencies
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ionic cordova dependencies/plugins
// ionic cordova dependencies/plugins
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// 3rd party dependencies
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
// app dependencies like directive, sdk, services etc
import { DirectivesModule } from '../directives/directives.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import 'hammerjs'
import {  LoggerService } from '@ws-widget/utils'
import { InitService } from '../services/init.service';
import { AuthKeycloakService } from '../../library/ws-widget/utils/src/lib/services/auth-keycloak.service'
import { CoreModule } from './modules/core/core.module';
import { HomeModule } from './modules/home/home.module';
import { TncAppResolverService } from '../services/tnc-app-resolver.service';
import { TncPublicResolverService } from '../services/tnc-public-resolver.service';
const appInitFactory = (initSvc: InitService, logger: LoggerService)=> async()=>{
  try {
    await initSvc.init()
  } catch (error) {
    logger.error('ERROR DURING APP INITIALIZATION >', error)
  }
}
import { ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage';
import { PageFilterOptionsPageModule } from './page-filter/page-filter-options/page-filter-options.module';
import { PageFilterOptionsPage } from './page-filter/page-filter-options/page-filter-options.page';
import { PageFilterPageModule } from './page-filter/page-filter.module';
import { PageFilterPage } from './page-filter/page-filter.page';
import { TermsAndConditionsPageModule } from './terms-and-conditions/terms-and-conditions.module';
import { UserTypeSelectionPageModule } from './user-type-selection/user-type-selection.module';
import { MatSliderModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatListModule, MatMenuModule, MatGridListModule, MatDividerModule, MatProgressBarModule, MatExpansionModule, MatRippleModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatTooltipModule, MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatSnackBarModule } from '@angular/material';
import { WIDGET_REGISTRATION_CONFIG } from '@app/library/ws-widget/collection/src/public-api';
import { WidgetResolverModule } from '@app/library/ws-widget/resolver/src/public-api';
import { SearchModule, AppTocModule } from '@app/project/ws/app/src/public-api';
import { PublicModule } from './modules/public/public.module';
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
    /* TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (translateHttpLoaderFactory),
        deps: [HttpClient]
      }
    }), */
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
    
  }

  private setDefaultLanguage() {
    this.translate.setDefaultLang('en');
  }
}
