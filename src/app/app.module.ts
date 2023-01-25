import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { PageModule } from './modules/pages/page.module';
import { NewTncComponent } from './routes/new-tnc/new-tnc.component';
import { TncPublicResolverService } from './services/tnc-public-resolver.service';
import { TncRendererComponent } from './components/tnc-renderer/tnc-renderer.component';
import { TncAppResolverService } from './services/tnc-app-resolver.service';
const appInitFactory = (initSvc: InitService, logger: LoggerService)=> async()=>{
  try {
    await initSvc.init()
  } catch (error) {
    logger.error('ERROR DURING APP INITIALIZATION >', error)
  }
}
// import { SunbirdSdk } from 'sunbird-sdk';
// import { MobileDashboardComponent } from './modules/pages/components/mobile-dashboard/mobile-dashboard.component';
// import { MobileCategoryComponent } from './modules/pages/components/mobile-category/mobile-category.component';
// import { MobileCourseViewComponent } from './modules/pages/components/mobile-course-view/mobile-course-view.component';
// import { MobileHowDoesWorkComponent } from './modules/pages/components/mobile-how-does-work/mobile-how-does-work.component';
@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    NewTncComponent,
    TncRendererComponent
   

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
    PageModule
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
})
export class AppModule {}
