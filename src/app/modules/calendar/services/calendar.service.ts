import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '../interfaces/calendar';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor(private http: HttpClient) { }
  private url = "/api/calendar"
  getCalendarId(date: string): Observable<Calendar[]> {
    console.log(date);
    return this.http.get<Calendar[]>(`${this.url}/${date}`)
  }

}
