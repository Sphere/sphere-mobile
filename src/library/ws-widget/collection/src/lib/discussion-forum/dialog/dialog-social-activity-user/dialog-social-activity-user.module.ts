import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DialogSocialActivityUserComponent } from './dialog-social-activity-user.component'
import { UserImageModule } from '../../../_common/user-image/user-image.module'
import { MatTabsModule } from '@angular/material/tabs'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [DialogSocialActivityUserComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    UserImageModule,
  ],
  entryComponents: [DialogSocialActivityUserComponent],
})
export class DialogSocialActivityUserModule { }
