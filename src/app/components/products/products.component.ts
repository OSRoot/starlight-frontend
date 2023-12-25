import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AllProducts } from 'src/app/_interfaces/product';
import { ProductsService } from 'src/app/_services/products.service';
import { DataService } from 'src/app/shared/components/services/data/data.service';
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
  category_Id:any
    selectedValue :any = '';
    categories:any
  searchTerm: string = '';
  products:any[]=[];
  constructor(
    @Inject(PLATFORM_ID) private platform:object,
    private actRoute: ActivatedRoute, private productService:ProductsService, private meta:MetaService,
    private data:DataService
  ) { }
  ngOnInit() {
    this.category_Id = this.actRoute.queryParams.subscribe(
      params=>{
        this.category_Id = params['category_Id']  as string;
        console.log(this.category_Id);

      }
    )
    this.getProducts( );
    this.getProductsMeta();
    this.getCategories()
    //   this.actRoute.queryParamMap.subscribe(params => {
    //       this.selectedValue=+params.get('id')! || '' ;
    //       this.selectedValue=+params.get('name')! || ''
    //   });

    //   this.actRoute.data.subscribe(data => {
    //    this.allProducts=data['routeResolver']
    //    this.allProducts.categories.unshift(this.newCategory)
    // })

    // enable Meta information

  }



  onSelectionChange() {
    this.getProducts()
  }
  onSearchSubmit() {
    this.getProducts()
  }

  getEndPointMeta():string{
    let endpoint = `/content/products`;
    return endpoint;
  }
  getProductsMeta(){
    this.data.getData(this.getEndPointMeta()).subscribe(
      res=>{
        this.meta.setMeta(res.data?.meta_tags);
      }
    )
  }

  getEndPoint():string{
    let endpoint = `/products?title=${this.searchTerm}`;
    if (this.selectedValue!=='') endpoint += `&category_Id=${this.selectedValue}`;
    // if(this.category_Id!=='') endpoint += `&category_Id=${this.category_Id}`
    return endpoint;
  }

  getProducts(){
    this.data.getData(this.getEndPoint()).subscribe(
      res=>{
        this.products = res.data;
      }

    )
  };

  getCategoryEndPoint(){
    let endpoint = `/categories`;
    return endpoint;
  }

  getCategories(){
    this.data.getData(this.getCategoryEndPoint()).subscribe(
      res=>{
        this.categories = res.data;
      }
    )
  }
}

