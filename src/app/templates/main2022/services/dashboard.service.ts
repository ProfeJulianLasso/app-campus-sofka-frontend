import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url = '/api/users/';
  constructor(private http: HttpClient) {}

  getCoursesUser(): Observable<any> {
    return this.http.get(this.url);
  }
}
