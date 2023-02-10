import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DisplayContentTypeModule, UserAutocompleteModule } from '@ws-widget/collection'
import { PipeConciseDateRangeModule } from '@ws-widget/utils'

import { TrainingContentRoutingModule } from './training-content-routing.module'
import { HomeComponent } from './components/home/home.component'
import { TrainingHeaderComponent } from './components/training-header/training-header.component'
import { TrainingsListComponent } from './components/trainings-list/trainings-list.component'
import { TrainingDetailsComponent } from './components/training-details/training-details.component'
import { TrainingsRegisteredComponent } from './components/trainings-registered/trainings-registered.component'
import { TrainingCardComponent } from './components/training-card/training-card.component'
import { TrainingsUpcomingComponent } from './components/trainings-upcoming/trainings-upcoming.component'
import { TrainingFilterDialogComponent } from './components/training-filter-dialog/training-filter-dialog.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TrainingContentService } from './services/training-content.service'
import { TrainingModule } from '../../training.module'
import { TrainingShareDialogComponent } from './components/training-share-dialog/training-share-dialog.component'
import { TrainingNominateDialogComponent } from './components/training-nominate-dialog/training-nominate-dialog.component'
import { TrainingCountResolver } from './resolvers/training-count.resolver'
import { TrainingPrivilegesResolver } from '../../resolvers/training-privileges.resolver'
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [
    HomeComponent,
    TrainingHeaderComponent,
    TrainingsListComponent,
    TrainingDetailsComponent,
    TrainingsRegisteredComponent,
    TrainingCardComponent,
    TrainingsUpcomingComponent,
    TrainingFilterDialogComponent,
    TrainingShareDialogComponent,
    TrainingNominateDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TrainingContentRoutingModule,
    TrainingModule,
    DisplayContentTypeModule,
    PipeConciseDateRangeModule,
    UserAutocompleteModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatBadgeModule,
    MatTooltipModule,
    MatChipsModule,
  ],
  entryComponents: [
    TrainingFilterDialogComponent,
    TrainingShareDialogComponent,
    TrainingNominateDialogComponent,
  ],
  providers: [TrainingContentService, TrainingCountResolver, TrainingPrivilegesResolver],
})
export class TrainingContentModule {}
