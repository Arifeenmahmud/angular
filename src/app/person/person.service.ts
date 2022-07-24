import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Person[]>("http://localhost:3000/person");
  }

  create(payload: Person) {
    return this.http.post<Person>("http://localhost:3000/person", payload);
  }
}
