import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl : string = 'http://localhost:5000/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get(`${this.baseUrl}`)
  }
}
