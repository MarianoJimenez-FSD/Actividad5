import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlogNew } from './interfaces/blog-new.interface';
import { BlogNewsService } from './services/blog-news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  readonly DELETE_ALL = 1;
  readonly DELETE_ONE = 2;

  @ViewChild('blogNewFormComponent')
  blogNewFormComponent: any;

  @ViewChild('confirmFormComponent')
  confirmFormComponent: any;

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

  addBlogNewButtonHandler(): void {   
    this.blogNewFormComponent.show(true, this.emptyNew);  
  }

  editBlogNewEventHandler(blogNew: any) {
    this.blogNewFormComponent.show(false, blogNew);
  }

  deleteAllButtonHandler(): void {
    this.confirmFormComponent.show(
      'Borrar noticias', 
      'Se va a eliminar todas las noticias. ¿Desea continuar?', 
      this.DELETE_ALL,
      null
    );
  }

  saveBlogNewFormEventHandler(saveBlogNewFormEventParams: any) {
    if (saveBlogNewFormEventParams.new) {
      this.blogNewsService.addBlogNew(saveBlogNewFormEventParams.blogNew);
    }
    else {
      this.blogNewsService.updateBlogNew(saveBlogNewFormEventParams.blogNew);
    }
  }

  confirmEventHandler(confirmEventParams: any) {    
    switch(confirmEventParams.confirmAction) {
      case this.DELETE_ALL:
        this.blogNewsService.deleteAll();
        break;
    }
  }

}
