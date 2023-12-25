import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aboutus } from 'src/app/_interfaces/aboutus';
import { DataService } from 'src/app/shared/components/services/data/data.service';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
  altText:string='about Starlight International trading company  من هي شركه ستارلايت للتجارة الدولية '
  allInfo!:Aboutus
  about:any;
  header:any
  meta_tags:any
  objectives:any
  ourmission:any
  ourvision:any
  sustainability:any
  whoweare:any
  constructor(
    private actRoute: ActivatedRoute,
    private meta:MetaService,
    private data:DataService
  ) { }
  ngOnInit() {
    this.getAboutUs()
    this.actRoute.data.subscribe(data => {
       this.allInfo=data['routeResolver']
    },
    err=>{

    }
    );

  }
  getAboutUs():void{
    this.data.getData('/content/aboutus').subscribe(
      res=>{
        this.about=res.data;
        this.header=res.data.header;
        this.objectives=res.data.objectives;
        this.ourmission=res.data.ourmission;
        this.ourvision=res.data.ourvision;
        this.sustainability=res.data.sustainability;
        this.whoweare=res.data.whoweare;
        console.log(this.about);
        this.meta.setMeta(res.data?.meta_tags)
      },
      err=>{

      }
    )
  }
}
