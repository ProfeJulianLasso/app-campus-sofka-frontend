import { Component, OnInit } from '@angular/core';
import { Calendar } from '../../interfaces/calendar';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'sofka-main-calendar',
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.scss']
})
export class MainCalendarComponent implements OnInit {
  selected?: Date;
  calendar: Calendar[];
  date: string;
  status: boolean;

  constructor(private calendarService: CalendarService) {
    this.calendar = []
    this.date = "";
    this.status = false;
  }

  ngOnInit(): void {
  }
  captureDate(event: Date): void {
    this.status = true;
    this.date = event.getFullYear() + "-" + (event.getMonth() + 1) + "-" + event.getDate();
    this.calendarService.getCalendarId(this.date).subscribe(res => {
      console.log(res)
      this.calendar.push(...res);
    })
  }



}
