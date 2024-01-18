import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Info } from 'src/app/_interfaces/aboutus';
import { ContactusService } from 'src/app/_services/contactus.service';
import { DataService } from 'src/app/shared/components/services/data/data.service';
import { LoaderService } from 'src/app/shared/components/services/loader/loader.service';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  isLoading!:boolean
  altText:string = ' Starlight International trading company events أحداث وفعاليات شركة ستارلايت للتجارة الدولية'
  myForm!: FormGroup;
  info:Info ={address:'',phone:'',email:''};
  contactus:any;
  constructor(
    private fb: FormBuilder,
    private contactService:ContactusService,
    private toastr: ToastrService,
    private meta:MetaService,
    private loader:LoaderService,
    private data:DataService
    ) {
      this.createForm()
    }


  ngAfterViewInit(){

  }

  ngOnInit() {
    this.getContactUS()
  }

  createForm(){
    this.myForm = this.fb.group({
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });

  }
getContactUS(){
  this.data.getData('/content/contact').subscribe(
      res=>{
        this.contactus = res.data;
        this.meta.setMeta(this.contactus?.meta_tags)
      }
  )
}
  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted:', this.myForm.value);
      this.contactService.contactUs(this.myForm.value).subscribe(
        res=>{
          this.toastr.success(res.message, 'Success');
        },
        err=>{
          this.toastr.error(err.error.message, 'Error');
        }
      )

    }else{
       this.toastr.error('All feild is required to send the message', 'Error');
    }
  }

}
