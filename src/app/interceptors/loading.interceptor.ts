import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { LoaderService } from '../shared/components/services/loader/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor (private loader:LoaderService){}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event=>{
        this.loader.loading.next(true);
        if(event.type==HttpEventType.Response){
          if(event.status == 200){
            this.loader.loading.next(false)
          }
        }
      })
    )
  }
}