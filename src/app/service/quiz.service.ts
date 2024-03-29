import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private url = 'https://quizapi.io/api/v1/questions';

  constructor(private http: HttpClient) { }

  public getQuizQestion(difficulty:string, limit: number):Observable<any> {
    let headers = { 'X-Api-Key': environment.apiKey };
    return this.http.get(`${this.url}?difficulty=${difficulty}&limit=${limit}`,{ headers:headers});
  }
}
