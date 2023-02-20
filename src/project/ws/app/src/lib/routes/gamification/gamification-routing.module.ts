import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'leaderboard',
    loadChildren: './routes/leaderboard/leaderboard.module#LeaderboardModule'

  },
  {
    path: 'badges',
    loadChildren: './routes/badges/badges.module#BadgesModule'

  },
  {
    path: 'admin',
    loadChildren: './routes/admin/admin.module#AdminModule'
  },
  {
    path: 'rewards',
    loadChildren: './routes/rewards/rewards.module#RewardsModule'
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamificationRoutingModule { }
