import { Component,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// import {filter, take, map} from 'rxjs';
import { MenuService } from '../services/menu/menu.service';
@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.scss']
})
export class ToggleMenuComponent  {
  
  isClosing:boolean = false;
   constructor(
    private router:Router,
    private menuService: MenuService
  ){
  }

  close(){
   this.menuService.toggleSubject.next(false);
   this.isClosing = true
  }
     ///////////// Method to help Activate the Tab ////////////
     isActive(route:string):boolean{
      return this.router.isActive(route, false)
      }

   
}
