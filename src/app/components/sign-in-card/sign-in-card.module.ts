import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import { CommonFormElementsModule } from 'common-form-elements';
import { SignInCardComponent } from './sign-in-card.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: SignInCardComponent
  }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule,
        CommonFormElementsModule
    ],
  declarations: [SignInCardComponent],
  exports: [RouterModule],
})
export class SignInCardModule {}
