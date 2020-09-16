import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUrlService {

  

  constructor( private http : HttpClient ) { }




  getPosts ():Observable<any>{
  const url = 'https://run.mocky.io/v3/ac619ca3-efb7-4ce9-8a1a-3fe9d94a22f2';
  return this.http.get<any>(url);
  }
}
