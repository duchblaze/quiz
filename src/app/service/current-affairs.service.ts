import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentAffairsService {

  constructor(private http: HttpClient) { }

  getCurrentAffairsQuestion() {
    return this.http.get<any>('assets/current-affairs.json')
  }
}
