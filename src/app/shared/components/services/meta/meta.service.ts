

import { Injectable } from "@angular/core";
import { Meta, MetaDefinition, Title } from "@angular/platform-browser";
import { Product } from "src/app/_interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  setTitle(title: string) {
    this.title.setTitle(title);
  }
  
  defaultTags: MetaDefinition[] = [
    {
      name: 'robots',
      content: 'index, follow, allow:*'
    },
    {
      name: 'author',
      content: 'Starlight'
    }
  ];


  initialTags() {
    this.meta.addTags(this.defaultTags);
    this.setTitle('Starlight - Elkenany');
  }

  setMetaTags(tags:MetaDefinition[]){
    this.meta.addTags(tags);
  };
// For pages like product details
setMetaInformationForPage(product?:Product):void{
  const title = product? `${product.id}: ${product.title}`:`Starlight - Elkenany`;
  const description = product ? `Details of ${product.id}: ${product.title}`:`Starlight - Elkenany`;
  const image = product ? product.images_url[0]:'';
  const keywords = product? `${product.id}: ${product.title}, ${product.meta_title || product.title}, ${product.social_title||product.title}`:``;
  const url = product? ``:``;
  const type = product? ``:``;
  const tags:MetaDefinition[] = [
    {name:'description', content:description},
    {name:'keywords', content:keywords},
    {name:'twitter:card', content:'summary'},
    {name:'twitter:image', content:image},
    {name:'twitter:title', content:title},
    {name:'twitter:description', content:description},
    {name:'apple-mobile-web-app-capable', content:'yes'},
    {name:'apple-mobile-web-app-status-bar-style', content:'black transparent'},
    {name:'apple-mobile-web-app-title', content:title},
    {name:'apple-touch-startup-image', content:image},
    {name:'og:title', content:title},
    {name:'og:description', content:description},
    {name:'og:url', content:url,property:'og:url'},
    {name:'og:image', content:image}
  ];
  tags.forEach(tag=>this.meta.updateTag(tag))
}


// Set Meta Information For Home page 
setHomeMeta(MetConfig?:any){
  this.title.setTitle(`Starlight: International Trading Company - Your Global Trade Partner`)
  const social_title = 'Starlight | International Trading Company'
  const description = `Explore Starlight, a leading international trading company specializing in global trade partnerships. Discover huge trading opportunities,All Over the world.`
  const keywords = 'Starlight , international trading, commodities, business, Dubai ,Exporting , importing';
  const url = 'https://starlight-ae.com/';
  const social_decription = 'All you need all over the world in one place.';
  const tags:MetaDefinition[] = [
    {name:'description', content:description},
    {name:'keywords', content:keywords},
    {name:'twitter:card', content:'summary'},
    // {name:'twitter:image', content:image},
    {name:'twitter:title', content:social_title},
    {name:'twitter:description', content:social_decription},
    {name:'apple-mobile-web-app-capable', content:'yes'},
    {name:'apple-mobile-web-app-status-bar-style', content:'black transparent'},
    {name:'apple-mobile-web-app-title', content:social_title},
    // {name:'apple-touch-startup-image', content:image},
    {name:'og:title', content:social_title},
    {name:'og:description', content:social_decription},
    // {name:'og:image', content:image}
  ];
  tags.forEach(tag=>this.meta.updateTag(tag))

}

// Set Meta Information For Products page 
setProductsMeta(MetConfig?:any){
  this.title.setTitle(`Our Products | Starlight International Trading Company | Dubai`)
  const social_title = 'Our Products | Starlight International Trading Company'
  const description = `From Livestock to commodities, All you need for your business. Explore our high-quality products offered by Starlight,an esteemed international trading company.`
  const keywords = 'products, Starlight , international trading, commodities, business, Dubai ,Exporting , importing ';
  const url = 'https://starlight-ae.com/products';
  const social_decription = 'Explore our high-quality products,From Livestock to commodities, All you need for your business';
  const tags:MetaDefinition[] = [
    {name:'description', content:description},
    {name:'keywords', content:keywords},
    {name:'twitter:card', content:'summary'},
    // {name:'twitter:image', content:image},
    {name:'twitter:title', content:social_title},
    {name:'twitter:description', content:social_decription},
    {name:'apple-mobile-web-app-capable', content:'yes'},
    {name:'apple-mobile-web-app-status-bar-style', content:'black transparent'},
    {name:'apple-mobile-web-app-title', content:social_title},
    // {name:'apple-touch-startup-image', content:image},
    {name:'og:title', content:social_title},
    {name:'og:description', content:social_decription},
    // {name:'og:image', content:image}
    {name:'og:url', content:url,property:'og:url'}
  ];
  tags.forEach(tag=>this.meta.updateTag(tag))

}

// Set Meta Information For About-Us page 
setAboutUsMeta(MetConfig?:any){
  this.title.setTitle(`International Trading Company - About Starlight`)
  const social_title = 'About Starlight '
  const description = `A distinguished international trading company based in Dubai. Discover our history, values, and commitment to delivering excellence in international trade.`
  const keywords = 'products, Starlight , international trading, commodities, business, Dubai ,Exporting , importing ';
  const url = 'https://starlight-ae.com/about-us';
  const social_decription = 'Starlight , international trading, commodities, business, Dubai ,Exporting , importing ,about us';
  const tags:MetaDefinition[] = [
    {name:'description', content:description},
    {name:'keywords', content:keywords},
    {name:'twitter:card', content:'summary'},
    // {name:'twitter:image', content:image},
    {name:'twitter:title', content:social_title},
    {name:'twitter:description', content:social_decription},
    {name:'apple-mobile-web-app-capable', content:'yes'},
    {name:'apple-mobile-web-app-status-bar-style', content:'black transparent'},
    {name:'apple-mobile-web-app-title', content:social_title},
    // {name:'apple-touch-startup-image', content:image},
    {name:'og:title', content:social_title},
    {name:'og:description', content:social_decription},
    // {name:'og:image', content:image}
    {name:'og:url', content:url,property:'og:url'}
  ];
  tags.forEach(tag=>this.meta.updateTag(tag))

}

// Set Meta Information For Contact-Us page 
setContactUsMeta(MetConfig?:any){
  this.title.setTitle(`Starlight International Trading Company | Contact Us`)
  const social_title = 'Starlight International Trading Company | Contact Us'
  const description = `Connect with Starlight a prominent international trading company specializing in various industries and markets.for fostering strong international partnerships.`
  const keywords = 'Starlight , international trading, commodities, business, Dubai ,Exporting , importing ,Starlight International Trading, events, trading events, international events, event updates, networking, unique experiences, business, Dubai ,Exporting , exporting';
  const url = 'https://starlight-ae.com/contact-us';
  const social_decription = 'Explore the global business ventures, a prominent international trading company specializing in various industries and markets.';
  const tags:MetaDefinition[] = [
    {name:'description', content:description},
    {name:'keywords', content:keywords},
    {name:'twitter:card', content:'summary'},
    // {name:'twitter:image', content:image},
    {name:'twitter:title', content:social_title},
    {name:'twitter:description', content:social_decription},
    {name:'apple-mobile-web-app-capable', content:'yes'},
    {name:'apple-mobile-web-app-status-bar-style', content:'black transparent'},
    {name:'apple-mobile-web-app-title', content:social_title},
    // {name:'apple-touch-startup-image', content:image},
    {name:'og:title', content:social_title},
    {name:'og:description', content:social_decription},
    // {name:'og:image', content:image}
    {name:'og:url', content:url,property:'og:url'}
  ];
  tags.forEach(tag=>this.meta.updateTag(tag))

}

// Set Meta Information For Events page 
setEventsMeta(MetConfig?:any){
  this.title.setTitle(` Events | Starlight International Trading Company`)
  const social_title = 'Starlight International Trading Company | Events'
  const description = `Explore events organized by Starlight International Trading Company. Stay updated with our latest events and activities. Join us for unique experiences and networking opportunities`
  const keywords = 'Starlight International Trading, events, trading events, international events, event updates, networking, unique experiences, business, Dubai ,Exporting , importing';
  const url = 'https://starlight-ae.com/events';
  const social_decription = 'Explore events organized by Starlight International Trading Company. Stay updated with our latest events and activities';
  const tags:MetaDefinition[] = [
    {name:'description', content:description},
    {name:'keywords', content:keywords},
    {name:'twitter:card', content:'summary'},
    // {name:'twitter:image', content:image},
    {name:'twitter:title', content:social_title},
    {name:'twitter:description', content:social_decription},
    {name:'apple-mobile-web-app-capable', content:'yes'},
    {name:'apple-mobile-web-app-status-bar-style', content:'black transparent'},
    {name:'apple-mobile-web-app-title', content:social_title},
    // {name:'apple-touch-startup-image', content:image},
    {name:'og:title', content:social_title},
    {name:'og:description', content:social_decription},
    // {name:'og:image', content:image}
    {name:'og:url', content:url,property:'og:url'}
  ];
  tags.forEach(tag=>this.meta.updateTag(tag));
}
  
}
