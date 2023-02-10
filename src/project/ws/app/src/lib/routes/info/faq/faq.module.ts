import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FaqHomeComponent } from './components/faq-home.component'
import { RouterModule } from '@angular/router'
import { BtnPageBackModule } from '@ws-widget/collection'
import { PipeSafeSanitizerModule } from '../../../../../../../../library/ws-widget/utils/src/public-api'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [FaqHomeComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule,
    RouterModule,
    MatIconModule,
    BtnPageBackModule,
    MatButtonModule,
    PipeSafeSanitizerModule,
  ],
  exports: [FaqHomeComponent],
})
export class FaqModule {}
