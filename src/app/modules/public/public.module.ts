import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { PublicHomeRoutingModule } from './public-home-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material'
import { MobilePageComponent } from './components/mobile-page/mobile-page.component';
import { MobileHomeComponent } from './components/mobile-home/mobile-home.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginOtpComponent } from './components/login-otp/login-otp.component';
import { WidgetResolverModule } from '@ws-widget/resolver'
import {  WIDGET_REGISTERED_MODULES, WIDGET_REGISTRATION_CONFIG } from '@ws-widget/collection'
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    PublicHomeComponent,
    MobilePageComponent,
    MobileHomeComponent,
    CreateAccountComponent,
    HeaderComponent,
    LoginOtpComponent,
    LoginComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    ReactiveFormsModule,
    PublicHomeRoutingModule,
    ...WIDGET_REGISTERED_MODULES,
    WidgetResolverModule.forRoot(WIDGET_REGISTRATION_CONFIG)
  ],
  entryComponents: [
    MobilePageComponent,
    MobileHomeComponent,
    CreateAccountComponent,
    HeaderComponent
  ],
  exports: [
    MobilePageComponent,
    MobileHomeComponent,
    LoginOtpComponent
  ]
})
export class PublicModule { }
