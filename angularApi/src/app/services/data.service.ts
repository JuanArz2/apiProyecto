import { Injectable, inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  API_URL: string = "https://www.fruityvice.com/api/fruit/all";

  httpClient = inject(HttpClient);

  obtenerData(){
    return this.httpClient.get(this.API_URL);
  }
}
