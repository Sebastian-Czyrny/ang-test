import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl: string = ' http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<any> {
    let url = this.apiUrl + '/posts';

    return this.httpClient.get(url);
  }
}
