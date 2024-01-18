import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, switchMap, tap } from 'rxjs';
import { Product } from 'src/app/_interfaces/product';
import { ProductsService } from 'src/app/_services/products.service';
import { DataService } from 'src/app/shared/components/services/data/data.service';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  // product!:Product;
  myForm!: FormGroup;
  prodDetails!:Product
  id:any;
  product:any;
  constructor(private fb: FormBuilder ,   private readonly actRoute: ActivatedRoute ,private toastr: ToastrService,
      private meta:MetaService,
     private data:DataService
    ) {
      this.createForm()
    }


  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.meta.setMetaInformationForPage(this.product);
    this.getProductById();
  }

  createForm(){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      product_id: [this.prodDetails?.id, Validators.required],
      message: ['', Validators.required]
    });

  }

  getProductById(){
    this.data.getData('/products/show/'+this.id).subscribe(
      res=>{
        this.product = res.data;
        this.meta.setMeta(res.data?.meta_tags)
      }
    )
  }
  onSubmit(id:any) {

    this.myForm.patchValue({
      product_id:id
    })
    console.log(this.myForm.value);

    if (this.myForm.invalid) {
      this.toastr.error('All feild is required to send the message');
      return
    }
   if (this.myForm.valid) {
     this.data.postData('/order/store', this.myForm.value).subscribe(
       res => {
         this.toastr.success(res.message);
       }
     )
   }
  }
}
