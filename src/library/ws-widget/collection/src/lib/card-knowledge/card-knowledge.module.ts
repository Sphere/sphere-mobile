import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardKnowledgeComponent } from './card-knowledge.component'
import { RouterModule } from '@angular/router'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips'
import { DefaultThumbnailModule, PipeDurationTransformModule, PipePartialContentModule } from '@ws-widget/utils'
import { BtnContentShareModule } from '../btn-content-share/btn-content-share.module'
import { BtnFollowModule } from '../btn-follow/btn-follow.module'
import { BtnKbAnalyticsModule } from '../btn-kb-analytics/btn-kb-analytics.module'

@NgModule({
  declarations: [CardKnowledgeComponent],
  imports: [
    CommonModule,
    RouterModule,
    DefaultThumbnailModule,
    BtnFollowModule,
    BtnContentShareModule,

    // Material Imports
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    PipeDurationTransformModule,
    BtnKbAnalyticsModule,
    PipePartialContentModule,
  ],
  exports: [CardKnowledgeComponent],
  entryComponents: [CardKnowledgeComponent],

})
export class CardKnowledgeModule { }