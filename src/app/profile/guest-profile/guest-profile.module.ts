import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@app/app/components/components.module';
import { SignInCardModule } from '@app/app/components/sign-in-card/sign-in-card.module';
import { PipesModule } from '@app/pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { GuestProfilePage } from './guest-profile.page';

const routes: Routes = [
  {
    path: '', component: GuestProfilePage,
  },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        TranslateModule,
        ComponentsModule,
        PipesModule,
        SignInCardModule
    ],
  declarations: [GuestProfilePage]
})
export class GuestProfilePageModule { }
