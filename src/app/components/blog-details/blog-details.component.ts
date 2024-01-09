import { Component, OnInit } from '@angular/core';
import { Event } from '../../_interfaces/blog';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/components/services/data/data.service';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit{
  blogDetails!:Event;
  event_id!:any;
  showlist=false
  blog:any;
  constructor(
    private actRoute: ActivatedRoute,
    private data:DataService,
    private meta:MetaService
  ) { }
  ngOnInit() {
    this.event_id = this.actRoute.snapshot.paramMap.get('id') as string;
    this.getEventByID()
    // this.actRoute.data.subscribe(data => {
    //    this.blogDetails=data['routeResolver']
    // })
  }


  getEventByID(){
    this.data.getData('/events/show/'+this.event_id).subscribe(
      res=>{
        this.blog = res.data;
        this.meta.setMeta(res.data?.meta_tags)
      }
    )
  }
}
