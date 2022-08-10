import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseTopicsService {
  url = '/api/courses/';
  constructor(private http: HttpClient) {}

  getCoursesTopics(): Observable<any> {
    return this.http.get(this.url);
  }
}
