import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppPublicNavBarComponent } from './app-public-nav-bar/app-public-nav-bar.component';
@NgModule({
  declarations: [
    AppPublicNavBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ReactiveFormsModule,
    
  ],
  entryComponents: [
    AppPublicNavBarComponent
  ],
  exports: [
    AppPublicNavBarComponent
  ],
  
})
export class ComponentsModule { }
