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
  constructor(private calendarService: CalendarService) {
    this.calendar = []
  }

  ngOnInit(): void {
    this.taskSearch();
    console.log(this.calendar)
  }

  taskSearch() {
    this.calendarService.getCalendarId(1).subscribe(res => {
      console.log(res)
      this.calendar.push(...res);
    })
  }

}
