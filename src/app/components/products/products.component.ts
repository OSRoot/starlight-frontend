import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllProducts } from 'src/app/_interfaces/product';
import { ProductsService } from 'src/app/_services/products.service';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  altText:string = ' Starlight International trading company products منتجات شركة ستارلايت للتجارة الدولية';
  allProducts!: AllProducts ;
  newCategory = {
    "id": '',
    "name": "All",
    "created_at": "2023-08-30T00:00:00.000000Z",
    "updated_at": "2023-08-30T00:00:00.000000Z",
    "image_url": "http://example.com/images/new-category.jpg"
  };
  
    selectedValue :any = '';

  searchTerm: string = '';
  constructor(
    @Inject(PLATFORM_ID) private platform:object,
    private actRoute: ActivatedRoute, private productService:ProductsService, private meta:MetaService
  ) { }
  ngOnInit() {

      this.actRoute.queryParamMap.subscribe(params => {
          this.selectedValue=+params.get('id')! || '' ;
          this.selectedValue=+params.get('name')! || '' 
      });

      this.actRoute.data.subscribe(data => {
       this.allProducts=data['routeResolver']
       this.allProducts.categories.unshift(this.newCategory)
    })

    // enable Meta information
    this.meta.setProductsMeta()
  
  }



  onSelectionChange() {
    this.productService.allProducts(this.searchTerm,this.selectedValue).subscribe(
      (res)=>{
        this.allProducts.products= res.products
      }
    )

  }
  onSearchSubmit() {
    this.productService.allProducts(this.searchTerm,this.selectedValue).subscribe(
      (res)=>{
        this.allProducts.products= res.products        
      }
    )
  }
}

