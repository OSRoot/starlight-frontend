import { Component, OnInit } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Home } from 'src/app/_interfaces/home';
import { HomeService } from 'src/app/_services/home.service';
import { LoaderService } from 'src/app/shared/components/services/loader/loader.service';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading:boolean = false;
  altText:string = "Starlight International trading company شركه ستارلايت للتجارة الدولية";
  // staticTags:
  home!: Home ;
  constructor(
    private actRoute: ActivatedRoute,
    private meta:MetaService,
    private loader:LoaderService
  ) { }
  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      console.log('Check route resolver data')
       this.home=data['routeResolver'];
       console.log('====================================');
       console.log(this.home.categories);
       console.log('====================================');
    })
    // Set the Title manually
    this.meta.setHomeMeta();
    this.loader.loading.subscribe(
      loader => this.isLoading = loader
    )
  }

  slideConfig = { 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, 
    // centerMode: true,
    // centerPadding: '30px',
    arrows: true,
    infinite: true,
    vertical: false, // Add this line to enable horizontal scrolling

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],};


    

}
