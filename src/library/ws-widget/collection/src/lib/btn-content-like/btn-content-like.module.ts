import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BtnContentLikeComponent } from './btn-content-like.component'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge'

@NgModule({
  declarations: [BtnContentLikeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
  ],
  exports: [BtnContentLikeComponent],
  entryComponents: [BtnContentLikeComponent],
})
export class BtnContentLikeModule { }
