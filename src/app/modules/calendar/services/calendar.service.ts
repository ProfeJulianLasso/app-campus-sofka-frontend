import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from '../interfaces/calendar';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor(private http: HttpClient) { }
  private url = "http://localhost:3000/calendario"
  getCalendarId(id: Number): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(`${this.url}/${id}`)
  }

}
