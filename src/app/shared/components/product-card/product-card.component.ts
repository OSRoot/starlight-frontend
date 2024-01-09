import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/_interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  altText:string = ' Starlight International trading company products منتجات شركة ستارلايت للتجارة الدولية';
  @Input() data!: any ;
desc:any
  constructor(
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    this.desc = this.sanitizer.bypassSecurityTrustHtml(this.data.short_description) as string;
    this.desc  = this.desc.changingThisBreaksApplicationSecurity as string
  }
}
