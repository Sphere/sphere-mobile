import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InfyRoutingModule } from './infy-routing.module'
import { CertificationsGuard } from './routes/certification-dashboard/guards/certifications.guard'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [],
  imports: [CommonModule, InfyRoutingModule, MatIconModule, MatCardModule],
  providers: [CertificationsGuard],
})
export class InfyModule {}
