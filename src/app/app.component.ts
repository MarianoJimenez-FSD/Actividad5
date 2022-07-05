import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlogNew } from './interfaces/blog-new.interface';
import { BlogNewsService } from './services/blog-news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('blogNewFormComponent')
  blogNewFormComponent: any;

  @ViewChild('content')
  content: any;

  emptyNew: BlogNew = {
    id: -1,
    title: "",
    image: "",
    text: "",
    date: new Date()
  };

  blogNews: Map<number, BlogNew> = new Map<number, BlogNew>();

  constructor(private blogNewsService: BlogNewsService) { }

  ngOnInit(): void {
    this.blogNews = this.blogNewsService.getBlogNews();
  }

  addBlogNew(): void {   
    this.blogNewFormComponent.show(true, this.emptyNew);  
  }

  deleteAllBlogNews(): void {
  }

  saveBlogNewFormEventHandler(saveBlogNewFormEventParams: any) {
    if (saveBlogNewFormEventParams.new) {
      this.blogNewsService.addBlogNew(saveBlogNewFormEventParams.blogNew);
    }
    else {
      this.blogNewsService.updateBlogNew(saveBlogNewFormEventParams.blogNew);
    }
  }

}
