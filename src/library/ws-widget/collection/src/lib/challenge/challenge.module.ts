import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChallengeComponent } from './challenge.component'
import { ActivityCardModule } from '../activity-card/activity-card.module'
import { HorizontalScrollerModule } from '@ws-widget/utils'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [ChallengeComponent],
  imports: [
    CommonModule,
    ActivityCardModule,
    HorizontalScrollerModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [ChallengeComponent],
})
export class ChallengeModule { }
