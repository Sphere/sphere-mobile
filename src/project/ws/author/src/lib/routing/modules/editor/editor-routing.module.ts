import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { InitResolver } from '@ws/author/src/lib/services/init-resolve.service'
import { EditorComponent } from './components/editor/editor.component'

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
    children: [
      {
        path: 'curate',
        loadChildren: './routing/modules/curate/curate.module#CurateModule',
      },
      {
        path: 'upload',
        loadChildren: './routing/modules/upload/upload.module#UploadModule',
      },
      {
        path: 'collection',
        data: {
          load: ['collection', 'create'],
        },
        resolve: {
          script: InitResolver,
        },
        loadChildren: './routing/modules/collection/collection.module#CollectionModule',
      },
      {
        path: 'quiz',
        loadChildren: './routing/modules/quiz/quiz.module#QuizModule',
      },
      {
        path: 'assessment',
        loadChildren: './routing/modules/quiz/quiz.module#QuizModule',
      },
      {
        path: 'web-module',
        loadChildren: './routing/modules/web-page/web-page.module#WebPageModule',
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditorRoutingModule { }
