import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Question } from '../interfaces/IQuestion';

@Injectable({
  providedIn: 'root'
})
export class CourseTopicsService {
  url = '/api/courses/';
  private url2 = "http://localhost:3000/preguntas/1"
  constructor(private http: HttpClient) { }

  getCoursesTopics(): Observable<any> {
    return this.http.get(this.url);
  }

  getQuestion(): Observable<Question> {
    return this.http.get<Question>(this.url2);
  }
}
