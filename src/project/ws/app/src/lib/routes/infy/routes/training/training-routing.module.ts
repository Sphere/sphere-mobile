import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './routes/training-dashboard/training-dashboard.module#TrainingDashboardModule'
  },
  {
    path: ':contentId',
    loadChildren: './routes/training-content/training-content.module#TrainingContentModule'
  },
  {
    path: '',
    redirectTo: 'dashboard',
  },
]

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: routes,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
