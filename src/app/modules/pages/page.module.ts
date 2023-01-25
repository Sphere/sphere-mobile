import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material'
import { MobileCategoryComponent } from './components/mobile-category/mobile-category.component';
import { MobileCourseViewComponent } from './components/mobile-course-view/mobile-course-view.component';
import { MobileDashboardComponent } from './components/mobile-dashboard/mobile-dashboard.component';
import { MobileHowDoesWorkComponent } from './components/mobile-how-does-work/mobile-how-does-work.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageHomeRoutingModule } from './page-home-routing.module';

@NgModule({
    declarations: [
        MobileDashboardComponent,
        MobileCategoryComponent,
        MobileCourseViewComponent,
        MobileHowDoesWorkComponent,
        PageHomeComponent
      ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MatFormFieldModule, 
        MatInputModule, 
        MatIconModule,
        ReactiveFormsModule,
        PageHomeRoutingModule
    ],
    entryComponents: [
     
    ],
    exports: [ 
        MobileDashboardComponent,
        MobileCategoryComponent,
        MobileCourseViewComponent,
        MobileHowDoesWorkComponent,   
    ]
  })

export class PageModule { }