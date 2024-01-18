import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/_interfaces/aboutus';
import { ContactusService } from 'src/app/_services/contactus.service';
import { DataService } from '../services/data/data.service';
import { Router } from '@angular/router';
import { RefreshWatcherService } from '../services/refresher/refresh.service';
import { Pages } from 'src/app/core/page';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  footerCategories:any[]=[]
  info:Info ={address:'',phone:'',email:''};
  constructor(
    private contactservice:ContactusService,private data:DataService
    ,private router:Router,
    private refresh:RefreshWatcherService

    ){}

  ngOnInit() {
    this.getCategories();
    this.contactservice.info().subscribe(
      res=>{
        this.info=res
      }
    )
}

getCategoryEndPoint(){
  let endpoint = `/categories`;
  return endpoint;
}
getCategories(){
  this.data.getData(this.getCategoryEndPoint()).subscribe(
    res=>{
      this.footerCategories = res.data;
    }
  )
}

navigate(cat:any){
  this.router.navigate(['products'], { queryParams: { title: '', category_Id: cat.id } });
  this.refresh.refreshPage(Pages.Products)

}
}
