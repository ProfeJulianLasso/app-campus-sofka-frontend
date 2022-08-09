import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url = '/api/courses/';
  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get(this.url);
  }
}
