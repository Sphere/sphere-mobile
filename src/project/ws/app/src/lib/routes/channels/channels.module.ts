import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ChannelsRoutingModule } from './channels-routing.module'
import { ChannelsHomeComponent } from './routes/channels-home/channels-home.component'
import { CardChannelModule, CardChannelModuleV2, CardContentModule, BtnPageBackModule } from '@ws-widget/collection'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
@NgModule({
  declarations: [ChannelsHomeComponent],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    CardChannelModule,
    MatToolbarModule,
    BtnPageBackModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    CardChannelModuleV2,
    CardContentModule,
  ],
})
export class ChannelsModule { }
