import { Component, Input } from '@angular/core';
import { Product } from 'src/app/_interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  altText:string = ' Starlight International trading company products منتجات شركة ستارلايت للتجارة الدولية';
  @Input() data!: Product ;
  
  
}
