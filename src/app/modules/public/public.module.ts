import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { PublicHomeRoutingModule } from './public-home-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MobilePageComponent } from './components/mobile-page/mobile-page.component';
import { MobileHomeComponent } from './components/mobile-home/mobile-home.component';
import { WidgetResolverModule } from '@ws-widget/resolver'
import {  WIDGET_REGISTERED_MODULES, WIDGET_REGISTRATION_CONFIG } from '@ws-widget/collection'
@NgModule({
  declarations: [PublicHomeComponent,
    MobilePageComponent,
    MobileHomeComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicHomeRoutingModule,
    ...WIDGET_REGISTERED_MODULES,
    WidgetResolverModule.forRoot(WIDGET_REGISTRATION_CONFIG)
  ],
  entryComponents: [
    MobilePageComponent,
    MobileHomeComponent,
  ],
  exports: [
    MobilePageComponent,
    MobileHomeComponent,
  ]
})
export class PublicModule { }
