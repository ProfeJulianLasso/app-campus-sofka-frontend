import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../interfaces/IQuestion';

@Injectable({
  providedIn: 'root'
})
export class CourseTopicsService {
  url = '/api/courses/';
  private url2 = "http://localhost:3000/question"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getCoursesTopics(): Observable<any> {
    return this.http.get(this.url);
  }

  getQuestion(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url2);
  }

  postQuestion(question: Question): Observable<Question> {
    return this.http.put<Question>(`${this.url2}/${question.id}`, question, this.httpOptions);
  }
}
