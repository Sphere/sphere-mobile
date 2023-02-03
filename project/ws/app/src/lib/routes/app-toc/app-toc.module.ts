import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppTocRoutingModule } from './app-toc-routing.module'
import { NgCircleProgressModule } from 'ng-circle-progress'

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatTooltipModule,
  MatTabsModule,
  MatChipsModule,
  MatDividerModule,
  MatProgressBarModule,
  MatListModule,
  MatDialogModule,
  MatRadioModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material'

// comps
import { AppTocContentsComponent } from './routes/app-toc-contents/app-toc-contents.component'
import { AppTocHomeComponent } from './components/app-toc-home/app-toc-home.component'
import { AppTocOverviewComponent } from './components/app-toc-overview/app-toc-overview.component'
import { AppTocContentCardComponent } from './components/app-toc-content-card/app-toc-content-card.component'
import { AppTocHomeComponent as AppTocHomeRootComponent } from './routes/app-toc-home/app-toc-home.component'
import { AppTocBannerComponent } from './components/app-toc-banner/app-toc-banner.component'

// services
import { AppTocService } from './services/app-toc.service'
import { AppTocResolverService } from './resolvers/app-toc-resolver.service'
import { ProfileResolverService } from './../user-profile/resolvers/profile-resolver.service'

// custom modules
import { WidgetResolverModule } from '@ws-widget/resolver'
import { DiscussionUiModule } from '@aastrika_npmjs/discussions-ui-v8'
import { AppTocHomeDirective } from './routes/app-toc-home/app-toc-home.directive'
import {
  PipeDurationTransformModule,
  PipeSafeSanitizerModule,
  PipeLimitToModule,
  PipePartialContentModule,
  HorizontalScrollerModule,
  DefaultThumbnailModule,
  PipeNameTransformModule,
  PipeCountTransformModule,
} from '@ws-widget/utils'
import {
  BtnCallModule,
  BtnContentDownloadModule,
  BtnContentLikeModule,
  BtnContentShareModule,
  BtnContentFeedbackModule,
  BtnContentFeedbackV2Module,
  BtnGoalsModule,
  BtnMailUserModule,
  BtnPageBackModule,
  UserImageModule,
  DisplayContentTypeModule,
  BtnPlaylistModule,
  DisplayContentTypeIconModule,
  ContentProgressModule,
  UserContentRatingModule,
  PipeContentRouteModule,
  BtnKbModule,
  MarkAsCompleteModule,
  PlayerBriefModule,
  CardContentModule,
  UserAutocompleteModule,
  PipeContentRoutePipe
} from '@ws-widget/collection'
import { AppTocOverviewComponent as AppTocOverviewRootComponent } from './routes/app-toc-overview/app-toc-overview.component'
import { AppTocCertificationModule } from './routes/app-toc-certification/app-toc-certification.module'
import { ProfileImageModule } from '../../../../../../../library/ws-widget/collection/src/lib/_common/profile-image/profile-image.module'
import { AccessControlService } from '../../../../../author/src/public-api'
import { LicenseComponent } from './components/license/license.component'
import { AllDiscussionWidgetComponent } from './routes/widget/all-discussion-widget/all-discussion-widget.component'
import { AppTocHomePageComponent } from './components/app-toc-home-page/app-toc-home-page.component'
import { AppTocDesktopComponent } from './components/app-toc-desktop/app-toc-desktop.component'
import { AssessmentDetailComponent } from './components/assessment-detail/assessment-detail.component'
import { AppTocDialogIntroVideoComponent } from './components/app-toc-dialog-intro-video/app-toc-dialog-intro-video.component'
import { AppTocOverviewDirective } from './routes/app-toc-overview/app-toc-overview.directive'
import { RetainScrollDirective } from './components/app-toc-home/retain-scroll.directive'

@NgModule({
  declarations: [
    AppTocContentsComponent,
    AppTocContentCardComponent,
    AppTocOverviewComponent,
    AppTocHomeComponent,
    AppTocHomePageComponent,
    AppTocBannerComponent,
    AppTocDesktopComponent,    
    AssessmentDetailComponent,
    AppTocDialogIntroVideoComponent,
    AllDiscussionWidgetComponent,
    AppTocOverviewDirective,
    AppTocOverviewRootComponent,
    AppTocHomeRootComponent,
    AppTocHomeDirective,
    RetainScrollDirective,
    LicenseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AppTocRoutingModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatRadioModule,
    MatTabsModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DisplayContentTypeModule,
    DisplayContentTypeIconModule,
    PipeDurationTransformModule,
    PipeSafeSanitizerModule,
    PipeLimitToModule,
    PipeNameTransformModule,
    PipeCountTransformModule,
    PipePartialContentModule,
    PipeContentRouteModule,
    BtnCallModule,
    BtnContentDownloadModule,
    BtnContentLikeModule,
    BtnContentFeedbackModule,
    BtnContentFeedbackV2Module,
    BtnGoalsModule,
    BtnPlaylistModule,
    BtnMailUserModule,
    BtnPageBackModule,
    HorizontalScrollerModule,
    UserImageModule,
    DefaultThumbnailModule,
    WidgetResolverModule,
    ContentProgressModule,
    UserContentRatingModule,
    BtnKbModule,
    AppTocCertificationModule,
    MarkAsCompleteModule,
    PlayerBriefModule,
    MatProgressSpinnerModule,
    CardContentModule,
    BtnContentShareModule,
    UserAutocompleteModule,
    ProfileImageModule,
    NgCircleProgressModule.forRoot({}),
    DiscussionUiModule,
  ],
  providers: [
    AppTocService,
    AccessControlService,
    AppTocResolverService,
    ProfileResolverService,
    PipeContentRoutePipe
  ],
  exports: [
    AssessmentDetailComponent,    
    AllDiscussionWidgetComponent],
  entryComponents: [
    AppTocHomeComponent,
    AppTocOverviewComponent,
    AppTocHomePageComponent,
    AppTocDialogIntroVideoComponent
  ],
})
export class AppTocModule { }
