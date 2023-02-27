import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {  MatIconModule, MatCardModule} from '@angular/material';

import { CounterEntityComponent } from './components/counter-entity/counter-entity.component'

@NgModule({
  declarations: [CounterEntityComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ],
})
export class CounterModule { }
