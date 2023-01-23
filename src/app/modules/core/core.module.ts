import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http'
import { DataService } from './services/data.service';
import { UtilityService } from './services/utility-service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[DataService,UtilityService]
})
export class CoreModule { }
