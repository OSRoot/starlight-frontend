

import { Injectable } from "@angular/core";
import { Meta, MetaDefinition, Title } from "@angular/platform-browser";
import { Product } from "src/app/_interfaces/product";
import { IMeta } from "src/app/core/interface/meta.interface";

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
setMetaInformationForPage(product?:Product , meta?:any) :void{
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




setMeta( meta?:IMeta){
  console.log(meta);

    this.title.setTitle(meta?.title as string)
  const social_title = meta?.social_title as string
  const description = meta?.meta_description as string;
  const keywords = meta?.focus_keyword as string;
  const url = meta?.url as string;
  const social_image = meta?.social_image as string;
  const social_alt_image = meta?.social_alt_image as string;
  const social_decription = meta?.social_description as string;

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
    {name:'og:image', content:social_image},
    {name:'og:description', content:social_decription},
    // {name:'og:image', content:image}
    {name:'og:url', content:url,property:'og:url'},
  ];
  tags.forEach(tag=>this.meta.updateTag(tag));
}
}
