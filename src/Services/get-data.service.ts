import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http : HttpClient) { }

  LoadIssue() : any {
    return this.http.get<any>('https://localhost:7152/api/Issue');
  }
}
