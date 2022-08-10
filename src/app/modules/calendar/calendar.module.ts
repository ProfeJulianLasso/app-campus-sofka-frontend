// Libraries
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MainCalendarComponent } from './pages/main-calendar/main-calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
// Routing

// Pipes

// Enums

// Guards

// Components

// Pages

@NgModule({
  declarations: [
    MainCalendarComponent,
  ],
  imports: [CommonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    HttpClientModule],
  exports: [MainCalendarComponent]
})
export class CalendarModule { }
