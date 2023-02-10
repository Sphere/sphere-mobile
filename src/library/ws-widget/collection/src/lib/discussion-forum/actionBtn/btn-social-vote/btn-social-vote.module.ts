import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BtnSocialVoteComponent } from './btn-social-vote.component'
import { DialogSocialActivityUserModule } from '../../dialog/dialog-social-activity-user/dialog-social-activity-user.module'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatBadgeModule } from '@angular/material/badge'

@NgModule({
  declarations: [BtnSocialVoteComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatBadgeModule, DialogSocialActivityUserModule],
  exports: [BtnSocialVoteComponent],
})
export class BtnSocialVoteModule { }
