import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  {
    path: 'my-feedback',
    loadChildren: './routes/my-feedback/my-feedback.module#MyFeedbackModule',
  },
  {
    path: '',
    loadChildren: './routes/provide-feedback/provide-feedback.module#ProvideFeedbackModule',
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
export class FeedbackV2RoutingModule {}
