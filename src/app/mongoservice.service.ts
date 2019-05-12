import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})

export class MongoserviceService {
  private mongobaseurl  = 'http://localhost:3000/';
  constructor(private http: HttpClient) { 

  }
  listCollection(): Observable<any> {
    return this.http.get(this.mongobaseurl + 'list',httpOptions);
  }
  getCollection(params): Observable<any> {
    return this.http.get(this.mongobaseurl + 'find/'+ params.collection + '/' + params.id, httpOptions);
  }
  insertDoc(collection, document): Observable<any> {
    return this.http.post(this.mongobaseurl + 'insert/' + collection,document, httpOptions)
  }
  newCollection(params): Observable<any> {
    return this.http.post(this.mongobaseurl + 'new/' + params.collection,params, httpOptions)
  }
}
