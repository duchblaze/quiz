import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularServiceService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<any>('assets/question.json');
  }
}
