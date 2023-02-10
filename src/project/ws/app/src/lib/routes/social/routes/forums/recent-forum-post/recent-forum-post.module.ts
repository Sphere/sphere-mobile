import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatDialogModule } from '@angular/material/dialog'
// tslint:disable-next-line: max-line-length
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar'
import { RouterModule } from '@angular/router'
import { BtnPageBackModule, BtnSocialLikeModule, BtnSocialVoteModule } from '@ws-widget/collection'
import { ForumCardModule } from '../forum-card/forum-card.module'
import { BtnFlagModule } from '../widgets/buttons/btn-flag/btn-flag.module'
import { RecentForumPostComponent } from './components/recent-forum-post.component'

@NgModule({
  declarations: [RecentForumPostComponent],
  imports: [

    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BtnSocialLikeModule,
    RouterModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    BtnPageBackModule,
    BtnPageBackModule,
    BtnSocialVoteModule,
    BtnSocialLikeModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatChipsModule,
    MatFormFieldModule,
    BtnFlagModule,
    ForumCardModule,
  ],

  exports: [RecentForumPostComponent],
})
export class RecentForumPostModule {
  constructor() {
    // console.log('success in reaching recent forum post module')
  }
}
