import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminRoutingModule } from './admin-routing.module'
import { AdminComponent } from './components/admin/admin.component'
import { ExcelService } from './components/excel.service'
import { UserImageModule } from '@ws-widget/collection'
import { FormsModule } from '@angular/forms'
import { PipeNameTransformModule, PipeCountTransformModule } from '@ws-widget/utils'
import { ConfigurationsComponent } from './components/configurations/configurations.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [AdminComponent,
    ConfigurationsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    UserImageModule,
    PipeNameTransformModule,
    FormsModule,
    PipeCountTransformModule,
    MatFormFieldModule,
    MatInputModule, MatSidenavModule, MatMenuModule,
  ],
  providers: [ExcelService],
})
export class AdminModule { }
