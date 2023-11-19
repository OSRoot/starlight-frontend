import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Info } from '../_interfaces/aboutus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(public http: HttpClient) { }

  info(): Observable<Info> {
    return this.http.get<Info>(`${env.apiUrl}/infos`).pipe(take(1));
  }
  contactUs(body: {first_name:string,second_name:string, email:string,phone:string,message:string}): Observable<{message:string}> { 
    return this.http.post<{message:string}>(`${env.apiUrl}/contactus/store`,body)
  }

  // getData():Observable<any>{
  //   return this.http.get(`${env.apiUrl}/infos`).pipe(take(1));
  // }
}
