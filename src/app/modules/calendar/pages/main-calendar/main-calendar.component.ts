import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sofka-main-calendar',
  templateUrl: './main-calendar.component.html',
  styleUrls: ['./main-calendar.component.scss']
})
export class MainCalendarComponent implements OnInit {
  selected?: Date | null;
  constructor() { }

  ngOnInit(): void {
  }

  taskSearch(id: string) {
    console.log(id);
  }

}
