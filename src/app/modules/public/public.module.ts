import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from './components/public-home/public-home.component';
import { PublicHomeRoutingModule } from './public-home-routing.module';

@NgModule({
  declarations: [PublicHomeComponent],
  imports: [
    CommonModule,
    PublicHomeRoutingModule
  ]
})
export class PublicModule { }
