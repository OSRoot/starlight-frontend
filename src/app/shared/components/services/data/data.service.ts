import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
// import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private  BASEAPI = environment.apiUrl as string;
  private body:any;
  private user:any={};
  constructor(
    private http:HttpClient,

) { }

  set Body(body:any){
    this.body = body;
  };

  get Body():any{
    return this.body;
  }



  getData(endPoint: string): Observable<any> {
    return this.http.get(this.BASEAPI + endPoint).pipe(take(1));
  }

  postData(endPoing: string, body: any): Observable<any> {
    return this.http.post(this.BASEAPI + endPoing, body).pipe(take(1));
  }

  updateData(endPoing: string, body: any): Observable<any> {
    return this.http.put(this.BASEAPI + endPoing, body).pipe(take(1));
  }

  deleteData(endPoing: string): Observable<any> {
    return this.http.delete(this.BASEAPI + endPoing).pipe(take(1));
  }

get baseApi ():string{
  return this.BASEAPI;
}

}
