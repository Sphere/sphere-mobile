import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BtnContentFeedbackComponent } from './btn-content-feedback.component'
import { BtnContentFeedbackDialogComponent } from './btn-content-feedback-dialog/btn-content-feedback-dialog.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatDialogModule } from '@angular/material/dialog'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  declarations: [BtnContentFeedbackComponent, BtnContentFeedbackDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  exports: [BtnContentFeedbackComponent],
  entryComponents: [BtnContentFeedbackComponent, BtnContentFeedbackDialogComponent],
})
export class BtnContentFeedbackModule { }
