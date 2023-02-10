import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BtnMailUserComponent } from './btn-mail-user.component'
import { BtnMailUserDialogComponent } from './btn-mail-user-dialog/btn-mail-user-dialog.component'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [BtnMailUserComponent, BtnMailUserDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  exports: [BtnMailUserComponent],
  entryComponents: [BtnMailUserComponent, BtnMailUserDialogComponent],
})
export class BtnMailUserModule { }
