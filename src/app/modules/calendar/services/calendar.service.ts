import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '../interfaces/calendar';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  calendar: Calendar = {
    id: '',
    datetime: '',
    title: '',
    idUser: ''
  }
  constructor() { }

  /*getCalendarId(id: String): Observable<Calendar[]> {
    
   }*/

}
