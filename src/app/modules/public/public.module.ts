import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { PublicHomeRoutingModule } from './public-home-routing.module';
import { PublicAppHeaderComponent } from './components/public-app-header/public-app-header.component';
import { PublicAppFooterComponent } from './components/public-app-footer/public-app-footer.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PublicHomeComponent,
    PublicAppHeaderComponent,
    PublicAppFooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicHomeRoutingModule,
  ],
  entryComponents: [
    PublicAppHeaderComponent,
    PublicAppFooterComponent
  ],
  exports: [
    PublicAppHeaderComponent,
    PublicAppFooterComponent
  ]
})
export class PublicModule { }
