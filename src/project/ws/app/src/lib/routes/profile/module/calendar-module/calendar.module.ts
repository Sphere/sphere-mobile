import { NgModule } from '@angular/core'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { CalendarComponent } from './calendar.component'

@NgModule({
  declarations: [CalendarComponent],
  imports: [MatDatepickerModule, MatNativeDateModule],
  providers: [MatDatepickerModule],
  exports: [CalendarComponent],
})
export class CalendarModule {}
