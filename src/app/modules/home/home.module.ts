import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material'
import { MobileCategoryComponent } from './components/mobile-category/mobile-category.component';
import { MobileCourseViewComponent } from './components/mobile-course-view/mobile-course-view.component';
import { MobileDashboardComponent } from './components/mobile-dashboard/mobile-dashboard.component';
import { MobileHowDoesWorkComponent } from './components/mobile-how-does-work/mobile-how-does-work.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UserService } from './services/user.service';
import { UtilityService } from '../core/services/utility-service';

@NgModule({
  declarations: [
    MobileDashboardComponent,
    MobileCategoryComponent,
    MobileCourseViewComponent,
    MobileHowDoesWorkComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  entryComponents: [

  ],
  providers: [
    UserService,
    UtilityService
  ],
  exports: [
    MobileDashboardComponent,
    MobileCategoryComponent,
    MobileCourseViewComponent,
    MobileHowDoesWorkComponent,
  ]
})

export class HomeModule { }