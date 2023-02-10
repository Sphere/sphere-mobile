import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { HorizontalScrollerModule, PipeDurationTransformModule, DefaultThumbnailModule } from '@ws-widget/utils'
import { UserImageModule, CardKnowledgeModule } from '@ws-widget/collection'
import { InterestModule } from './../interest/interest.module'
import { LearningModule } from './../learning/learning.module'
import { CompetencyModule } from './../competency/competency.module'
import { WidgetResolverModule } from '@ws-widget/resolver'
import { CalendarModule } from '../../module/calendar-module/calendar.module'
import { RouterModule } from '@angular/router'
import { CoursePendingCardComponent } from './components/course-pending-card/course-pending-card.component'
import { UserProfileService } from '../../../user-profile/services/user-profile.service'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [DashboardComponent, CoursePendingCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatDividerModule,
    MatButtonModule,
    DefaultThumbnailModule,
    HorizontalScrollerModule,
    UserImageModule,
    WidgetResolverModule,
    PipeDurationTransformModule,
    CalendarModule,
    RouterModule,
    CardKnowledgeModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    InterestModule,
    LearningModule,
    CompetencyModule,
  ],
  providers: [UserProfileService],
})
export class DashboardModule { }
