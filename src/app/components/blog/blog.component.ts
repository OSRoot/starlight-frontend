import { Component, OnInit } from '@angular/core';
  import { Event } from 'src/app/_interfaces/blog';
import { DataService } from 'src/app/shared/components/services/data/data.service';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  blog!:Event[];
  events:any;
  constructor(
    private meta:MetaService,
    private data:DataService
  ) { }
  ngOnInit() {
    this.getEvents();
    this.getEventsMeta()
  }

  getEventsMeta():void{
    this.data.getData('/content/events').subscribe(
      res=>{
        this.meta.setMeta(res.data?.meta_tags)
      },

      err=>{}
    )
  };


  getEvents():void{
    this.data.getData('/events').subscribe(
      res=>{
        this.events = res.data;
      },

    )
  }

}
