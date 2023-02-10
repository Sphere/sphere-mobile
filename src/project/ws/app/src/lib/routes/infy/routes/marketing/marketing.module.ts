import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MarketingComponent } from './marketing.component'
import { MarketingRoutingModule } from './marketing-routing.module'
import { MarketingServicesModule } from './marketing-services/marketing-services.module'
import { PageModule, BtnPageBackModule } from '@ws-widget/collection'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [MarketingComponent],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    MarketingServicesModule,
    PageModule,
    BtnPageBackModule,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
  ],
})
export class MarketingModule { }
