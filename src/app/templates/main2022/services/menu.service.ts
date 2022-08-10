import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private flag: boolean;
  private flagCalendar: boolean;
  flagChanged: EventEmitter<boolean>;
  flagCalendarChangue: EventEmitter<boolean>
  constructor() {
    this.flag = true;
    this.flagCalendar = false;
    this.flagChanged = new EventEmitter<boolean>();
    this.flagCalendarChangue = new EventEmitter<boolean>();
  }

  getFlag(): boolean {
    return this.flag;
  }

  getCalendar(): boolean {
    return this.flagCalendar;
  }

  changueCalendar(value: boolean) {
    this.flagCalendar = value;
    this.flagCalendarChangue.emit(value);
  }

  changeFlag(value: boolean) {
    this.flag = value;
    this.flagChanged.emit(value);
  }
}
