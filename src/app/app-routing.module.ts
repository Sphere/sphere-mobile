import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './modules/public/components/create-account/create-account.component';

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
    path: 'app/create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'page/home',
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
