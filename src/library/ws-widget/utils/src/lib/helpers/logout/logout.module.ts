import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LogoutComponent } from './logout.component'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
  ],
  entryComponents: [LogoutComponent],
})
export class LogoutModule { }
