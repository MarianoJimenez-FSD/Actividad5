import { Component, OnInit } from '@angular/core';
import { BlogNew } from './interfaces/blog-new.interface';
import { BlogNewsService } from './services/blog-news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  blogNews: Map<number, BlogNew> = new Map<number, BlogNew>();

  constructor(private blogNewsService: BlogNewsService) { }

  ngOnInit(): void {
    this.blogNews = this.blogNewsService.getBlogNews();
    console.log(this.blogNews);
  }
}
