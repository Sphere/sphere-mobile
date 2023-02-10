import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BtnPageBackModule, CardContentModule } from '@ws-widget/collection'
import { WidgetResolverModule } from '@ws-widget/resolver'
import { MyLearningRoutingModule } from './my-learning-routing.module'
import { HomeComponent } from './routes/home/home.component'
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MyLearningRoutingModule,
    MatCardModule,
    MatSidenavModule,
    CardContentModule,
    MatToolbarModule,
    WidgetResolverModule,
    MatButtonModule,
    MatIconModule,
    BtnPageBackModule,
    MatProgressSpinnerModule,
  ],
})
export class MyLearningModule {}
