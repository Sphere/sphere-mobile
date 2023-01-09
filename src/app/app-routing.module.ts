import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'public/home',
    loadChildren: () => import('./modules/public/public.module').then( m => m.PublicModule)
  },
  {
    path: '',
    redirectTo: 'public/home',
    pathMatch: 'full'
  },
  {
    path: 'routes/create-account',
    loadChildren: () => import('./modules/public/create-account.module').then( m => m.CreateAccountModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
