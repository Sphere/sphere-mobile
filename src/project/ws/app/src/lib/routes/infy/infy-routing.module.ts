import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CertificationsGuard } from './routes/certification-dashboard/guards/certifications.guard'

const routes: Routes = [
  {
    path: 'training',
    loadChildren: './routes/training/training.module#TrainingModule'
  },
  {
    path: 'certification-dashboard',
    loadChildren: './routes/certification-dashboard/certification-dashboard.module#CertificationDashboardModule',
    canActivate: [CertificationsGuard],
    data: {
      requiredFeatures: ['certificationLHub'],
    },
  },
  {
    path: 'navigator',
    loadChildren: './routes/navigator/navigator.module#NavigatorModule'
  },
  {
    path: 'experience-wow',
    loadChildren: './routes/ocm/ocm.module#OcmModule'
  },
  {
    path: 'khub',
    loadChildren: './routes/knowledge-hub/knowledge-hub.module#KnowledgeHubModule'
  },
  {
    path: 'marketing',
    loadChildren: './routes/marketing/marketing.module#MarketingModule'
  },
  {
    path: 'channels',
    loadChildren: './routes/channels/channels.module#ChannelsModule'
  },
  {
    path: 'events',
    loadChildren: './routes/events/events.module#EventsModule'
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfyRoutingModule { }
