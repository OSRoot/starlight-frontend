import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/_interfaces/blog';
import { MetaService } from 'src/app/shared/components/services/meta/meta.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{
  blog!:Event[]
  constructor(
    private actRoute: ActivatedRoute,
    private meta:MetaService
  ) { }
  ngOnInit() {
    this.actRoute.data.subscribe(data => {
       this.blog=data['routeResolver']
    });

    this.meta.setEventsMeta()
  }
}
