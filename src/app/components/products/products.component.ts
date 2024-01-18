import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AllProducts } from 'src/app/_interfaces/product';
import { ProductsService } from 'src/app/_services/products.service';
import { Pages } from 'src/app/core/page';
import { DataService } from 'src/app/shared/components/services/data/data.service';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';
import { RefreshWatcherService } from 'src/app/shared/components/services/refresher/refresh.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  altText:string = ' Starlight International trading company products منتجات شركة ستارلايت للتجارة الدولية';
  subscription:Subscription|undefined
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
  id=''
  products:any[]=[];
  constructor(
    @Inject(PLATFORM_ID) private platform:object,
    private actRoute: ActivatedRoute, private productService:ProductsService, private meta:MetaService,
    private data:DataService,
    private refresh:RefreshWatcherService
    ) { }
  ngOnInit() {
    this.subscription = this.refresh.refreshObservable.subscribe(
      page=>{
        if (page===Pages.Products)
        {
          setTimeout(() => {
            this.getProducts()

            }, 0);
        }
      }
    )
    this.category_Id = this.actRoute.queryParams.subscribe(
      params=>{
        if (params['category_Id']){
          this.selectedValue= params['category_Id'];
        }
       else {
        this.selectedValue = this.getDefaultCategoryId();
       }
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
      this.id = this.actRoute.snapshot.paramMap.get('category_Id') as string;
    // enable Meta information
      this.selectedValue = this.id

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


 ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
 }
  // 9/
  getDefaultCategoryId(): any {
    return this.categories.length > 0 ? this.categories[0].id : null;
  }

}

