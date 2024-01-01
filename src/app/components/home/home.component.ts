import { Component, OnInit } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Home } from 'src/app/_interfaces/home';
import { HomeService } from 'src/app/_services/home.service';
import { DataService } from 'src/app/shared/components/services/data/data.service';
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
  home: any ;
  categories:any;
  categories_products:any;
  events:any;
  header:any;
  meta_tags:any;
  products:any
  displayedProducts: any;
  constructor(
    private meta:MetaService,
    private data:DataService
  ) { }
  ngOnInit() {

    this.getHomeData( )

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


getHomeData():void{
      this.data.getData('/content/home').subscribe(
        res=>{
          this.home=res.data;
          this.categories = res.data.categories;
          this.categories_products = res.data.categories_products;
          this.events = res.data.events;
          console.log(res.data.events);

          this.header = res.data.header;
          this.meta_tags = res.data.meta_tags;
          this.meta.setMeta(this.meta_tags)
          this.displayedProducts = this.categories_products[0].products;
        }

      )
}

onSelectionChange(event?: any) {
  for (let productCat of this.categories_products) {
    if (productCat.name === event.tab?.textLabel) {
      this.displayedProducts = productCat.products;
      return; // Exit the loop once the matching category is found
    }
  }
}
}
