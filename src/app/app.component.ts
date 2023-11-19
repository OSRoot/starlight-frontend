import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MetaService } from './shared/components/services/meta/meta.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LoaderService } from './shared/components/services/loader/loader.service';
import { isPlatformBrowser } from '@angular/common';
declare var gtag:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starlight-angular';
  toggle!:boolean;
  isLoading!:boolean;
  constructor (
        @Inject(PLATFORM_ID) private _platformId: Object,
        private meta:MetaService,
        private router:Router,
        private loader:LoaderService
    ){
      this.loader.loading.subscribe(loading =>{ this.isLoading = loading; console.log(this.isLoading);
      })
    // Start Handling the navigation for google Analytics
    const navEnd = this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd),
    );
    navEnd.subscribe((event:any) =>{
      if(isPlatformBrowser(this._platformId)){
        gtag('config', 'G-FL7XG1690F',{
          'page_path':event.urlAfterRedirects
        });
      }
      else {
        return
      }
    })
    this.meta.initialTags();
  }

}
