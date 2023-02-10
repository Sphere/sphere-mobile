import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MarketingServicesComponent } from './marketing-services.component'
import { PentagonModule } from '../pentagon/pentagon.module'
import { WidgetResolverModule } from '@ws-widget/resolver'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTreeModule } from '@angular/material/tree'

@NgModule({
  declarations: [MarketingServicesComponent],
  imports: [
    CommonModule,
    MatTreeModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
    PentagonModule,
    WidgetResolverModule,
  ],
  exports: [MarketingServicesComponent],
})
export class MarketingServicesModule { }
