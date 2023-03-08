import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageResolve } from '@ws-widget/utils'
//import { GeneralGuard } from 'src/app/guards/general.guard' 

import { AppTocResolverService } from './resolvers/app-toc-resolver.service'
import { CertificationMetaResolver } from './routes/app-toc-certification/resolvers/certification-meta.resolver'
import { ContentCertificationResolver } from './routes/app-toc-certification/resolvers/content-certification.resolver'
import { AppTocContentsComponent } from './routes/app-toc-contents/app-toc-contents.component'
import { AppTocHomeComponent } from './routes/app-toc-home/app-toc-home.component'
import { LicenseComponent } from './components/license/license.component'
import { AllDiscussionWidgetComponent } from './routes/widget/all-discussion-widget/all-discussion-widget.component'
import { AppTocOverviewComponent } from './routes/app-toc-overview/app-toc-overview.component'
// import { DiscussConfigResolve } from '../../../../../../../src/app/routes/discussion-forum/wrapper/resolvers/discuss-config-resolve'
const routes: Routes = [
  {
    path: ':id',
    component: AppTocHomeComponent,
    data: {
      pageType: 'feature',
      pageKey: 'toc',
    },
    resolve: {
      pageData: PageResolve,
      content: AppTocResolverService,
    },
    runGuardsAndResolvers: 'paramsChange',
    children: [
      {
        path: 'chapters',
        component: AppTocContentsComponent,
      },
      {
        path: 'discussion-forum',
        component: AllDiscussionWidgetComponent,
        // resolve: {
        //   data: DiscussConfigResolve,
        // },
      },
      {
        path: 'certification',
        loadChildren: './routes/app-toc-certification/app-toc-certification.module#AppTocCertificationModule',
        // canActivate: [GeneralGuard],
        resolve: {
          certificationMetaResolve: CertificationMetaResolver,
          contentMetaResolve: ContentCertificationResolver,
        },
        runGuardsAndResolvers: 'always',
        data: {
          requiredFeatures: ['certificationLHub'],
        },
      },
      {
        path: 'license',
        component: LicenseComponent,
      },
      {
        path: 'overview',
        component: AppTocOverviewComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview',
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppTocRoutingModule { }
