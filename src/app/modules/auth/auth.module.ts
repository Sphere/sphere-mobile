import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material'
import { AuthRoutingModule } from './auth-routing.module';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginOtpComponent } from './components/login-otp/login-otp.component';
import { WidgetResolverModule } from '@ws-widget/resolver'
import {  WIDGET_REGISTERED_MODULES, WIDGET_REGISTRATION_CONFIG } from '@ws-widget/collection'
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [
    CreateAccountComponent,
    LoginOtpComponent,
    ForgotPasswordComponent,
    HeaderComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    ReactiveFormsModule,
    ...WIDGET_REGISTERED_MODULES,
    WidgetResolverModule.forRoot(WIDGET_REGISTRATION_CONFIG),
    AuthRoutingModule
  ],
  entryComponents: [
    CreateAccountComponent,
    HeaderComponent
  ],
  exports: [
    LoginOtpComponent
  ]
})
export class AuthModule { }
