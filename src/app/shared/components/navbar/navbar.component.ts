import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuService } from '../services/menu/menu.service';
import { filter, take, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  navbarItems = [
    { label: 'Home', active: false ,link:'/'},
    { label: 'About Us', active: false ,link:'/about-us'},
    { label: 'Products', active: false,link:'/products' },
    { label: 'Events', active: false ,link:'/events'},
    { label: 'Contact Us', active: false ,link:'/contact-us'}
  ];
  isMenuOpen = false;
  
  constructor(
    private router: Router,
    private menu:MenuService
    ) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(events => {
      if (events instanceof NavigationEnd) {
        this.navbarItems.forEach(item => {
          if(item.link === this.router.url){
            item.active= true
            this.navbarItems.forEach(item1 => {
              item1.active = item1 === item;
            });
          }
          if(this.router.url.startsWith('/products') ) {
            if(item.link.startsWith('/products') ){
              this.navbarItems.forEach(item1 => {
                item1.active = item1 === item;
              });
            }
            
        }
      }
        );
  }
})

}
  toggleMenu() {
    
    this.isMenuOpen = !this.isMenuOpen;
    
  }
  
  setActive(activeItem: any) {    
    this.navbarItems.forEach(item => {
      item.active = item === activeItem;
    });
    this.isMenuOpen = !this.isMenuOpen;

  }

  navigateRoot(){
    this.router.navigate(['/'],{replaceUrl:true})
  }

      ////// Os code ///////////////// 
     ///////////// Method to help Activate the Tab ////////////
     isActive(route:string):boolean{
      return this.router.isActive(route, false)
      }

        ////// Os code ///////////////// 
// openMenu(){
//   this.menu.toggleSubject.pipe(
//     filter(BH_VALUE => BH_VALUE!==null),
//     take(1),
//     map(isToggled=>{
//       console.log('====================================');
//       console.log('Menu is toggled');
//       console.log('====================================');
//       if (isToggled){
//         this.menu.toggleSubject.next(true)
//         return true;
//       }
//       else{
//         console.log('====================================');
//         console.log('Not triggerd');
//         console.log('====================================');
//         this.menu.toggleSubject.next(false);
//         return false  
//       }
//     })
//   )
// }

openMenu(): void {
  this.menu.toggleSubject.next(true);
  // this.menu.toggleSubject.pipe(take(1)).subscribe(val => console.log(`Menu Closed: ${val}`))
}

}
