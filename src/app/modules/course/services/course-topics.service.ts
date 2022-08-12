import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../interfaces/IQuestion';
import { Step } from '../interfaces/IStep';

@Injectable({
  providedIn: 'root'
})
export class CourseTopicsService {
  private url = '/api/stepfortopic/';
  private ulrstep = '/api/steps';
  private ulrsave = '/api/stepfortopic';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) { }

  getCoursesTopics(): Observable<any> {
    return this.http.get(this.url);
  }
  getStep(): Observable<Step[]> {
    return this.http.get<Step[]>(this.ulrstep);
  }

  getQuestion(step: string, id: string | null): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.url}/${step}/${id}`);
  }

  postQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.ulrsave}`, question, this.httpOptions);
  }
}
