import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get(
      'https://frontend-take-home.fetchrewards.com/form'
    );
  }

  postData(userData: any) {
    return this.httpClient.post(
      'https://frontend-take-home.fetchrewards.com/form',
      userData
    );
  }
  /*   postData(userData: any) {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post('http://localhost:3000/user', userData, {
      headers: httpHeaders,
    });
  } */
}
