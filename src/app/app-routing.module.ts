import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './modules/public/components/create-account/create-account.component';
import { NewTncComponent } from './routes/new-tnc/new-tnc.component';
import { TncPublicResolverService } from './services/tnc-public-resolver.service';
import { PageResolve } from '@ws-widget/utils';

const routes: Routes = [
  {
    path: 'public/home',
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
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
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'app/new-tnc',
    component: NewTncComponent,
    resolve: {
      tnc: TncPublicResolverService,
    },
  },
  {
    path: 'app/search',
    loadChildren: () =>
      import('./modules/overviews/routes/route-search-app.module').then(u => u.RouteSearchAppModule),
    data: {
      pageType: 'feature',
      pageKey: 'search',
    },
    resolve: {
      searchPageData: PageResolve,
    }
  }, 
  {
    path: 'app/toc',
    loadChildren: () => import('./modules/overview-toc/overview-toc.module').then(u => u.OverviewTocModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
