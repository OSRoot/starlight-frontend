import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aboutus } from 'src/app/_interfaces/aboutus';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
  altText:string='about Starlight International trading company  من هي شركه ستارلايت للتجارة الدولية '
  allInfo!:Aboutus
  constructor(
    private actRoute: ActivatedRoute,
    private meta:MetaService
  ) { }
  ngOnInit() {

    this.actRoute.data.subscribe(data => {
       this.allInfo=data['routeResolver']
    });

    this.meta.setAboutUsMeta()
  }
}
