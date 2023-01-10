import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { MatDialogModule, MatFormFieldModule } from '@angular/material';
import { LoginOtpComponent } from './routes/login-otp/login-otp.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CreateAccountComponent, 
    ,
    LoginOtpComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CreateAccountRoutingModule
  ],
  exports: [CreateAccountComponent, 
    ,
    LoginOtpComponent]
})
export class CreateAccountModule { }
