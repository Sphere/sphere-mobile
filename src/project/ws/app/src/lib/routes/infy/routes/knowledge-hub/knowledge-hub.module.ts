import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { KnowledgeHubRoutingModule } from './knowledge-hub-routing.module'
import { KhubHomeComponent } from './routes/khub-home/khub-home.component'
import { KhubViewComponent } from './routes/khub-view/khub-view.component'
import { BtnPageBackModule, ErrorResolverModule, BtnContentShareModule } from '@ws-widget/collection'
import { ItemsListComponent } from './components/items-list/items-list.component'
import { ProjectSnapshotComponent } from './components/project-snapshot/project-snapshot.component'
import { TopicTaggerComponent } from './components/topic-tagger/topic-tagger.component'
import { SearchModule } from '../../../search/search.module'
import { HorizontalScrollerModule, PipeLimitToModule } from '@ws-widget/utils'
import { WidgetResolverModule } from '@ws-widget/resolver'
import { AppTocModule } from '../../../app-toc/app-toc.module'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatOptionModule } from '@angular/material/core'
import { MatDividerModule } from '@angular/material/divider'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'

@NgModule({
  declarations: [
    KhubHomeComponent,
    KhubViewComponent,
    ItemsListComponent,
    ProjectSnapshotComponent,
    TopicTaggerComponent,
  ],
  imports: [
    CommonModule,
    KnowledgeHubRoutingModule,
    BtnPageBackModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    SearchModule,
    HorizontalScrollerModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatFormFieldModule,
    PipeLimitToModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    ErrorResolverModule,
    WidgetResolverModule,
    BtnContentShareModule,
    AppTocModule,
  ],
})
export class KnowledgeHubModule { }
