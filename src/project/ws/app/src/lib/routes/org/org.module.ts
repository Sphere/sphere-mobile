
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
// import { OrgRoutingModule } from './org-routing.module'
// import { OrgComponent } from './components/org/org.component'
import { HorizontalScrollerModule } from '@ws-widget/utils'
import { WidgetResolverModule } from '@ws-widget/resolver'
import { CardContentModule, PipeContentRoutePipe } from '@ws-widget/collection'
import { InfiniteScrollModule } from 'ngx-infinite-scroll'
import { MdePopoverModule } from '@material-extended/mde'
import { AllCoursesComponent } from './components/all-courses/all-courses.component'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatTabsModule } from '@angular/material/tabs'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [AllCoursesComponent],
  imports: [
    CommonModule,
    // OrgRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDatepickerModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    HorizontalScrollerModule,
    WidgetResolverModule,
    CardContentModule,
    InfiniteScrollModule,
    MdePopoverModule,
  ],
  providers: [PipeContentRoutePipe],
})
export class OrgModule { }
