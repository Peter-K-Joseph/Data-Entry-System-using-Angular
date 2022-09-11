import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface alumini {
  class: string;
  person: string;
  affiliate: string;
  programme: string;
  date: string;
  time: string;
  id: number;
}

export interface industry {
  course: string;
  class: string;
  date: string;
  topic: string;
  person: string;
  affiliate: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  get_alumini() {
    return this.http.get('http://localhost:3000/aluminiLecture');
  }

  get_alumini_id(id: any): Observable<alumini> {
    return this.http.get<alumini>('http://localhost:3000/aluminiLecture/' + id);
  }

  update_alumini(items: any, id: any) {
    return this.http.put(`http://localhost:3000/aluminiLecture/${id}`, items);
  }

  deleteAlumini(id: any) {
    return this.http.delete('http://localhost:3000/aluminiLecture/' + id);
  }
  
  alumini(items: any) {
    return this.http.post('http://localhost:3000/aluminiLecture', items);
  }

  get_industry() {
    return this.http.get('http://localhost:3000/industry');
  }

  get_industry_id(id: any): Observable<industry> {
    return this.http.get<industry>('http://localhost:3000/industry/' + id);
  }

  update_industry(items: any, id: any) {
    return this.http.put(`http://localhost:3000/industry/${id}`, items);
  }

  deleteIndustry(id: any) {
    return this.http.delete('http://localhost:3000/industry/' + id);
  }

  industry(items: any) {
    return this.http.post('http://localhost:3000/industry', items);
  }
  
  blended(items: any) {
    return this.http.post('http://localhost:3000/blended', items);
  }

  mooc(items: any) {
    return this.http.post('http://localhost:3000/mooc', items);
  }

  guest(items: any) {
    return this.http.post('http://localhost:3000/guest', items);
  }
}
