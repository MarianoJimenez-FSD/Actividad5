import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmFormComponent } from './components/confirm-form/confirm-form.component';
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
    this.blogNewFormComponent.show(
      true, 
      this.emptyNew
    )
    .then( (response: [boolean, BlogNew]) => {
      if (response[0]) {
        this.blogNewsService.addBlogNew(response[1]);
      }
    });  
  }

  editBlogNewEventHandler(blogNew: any) {
    this.blogNewFormComponent.show(
      false, 
      blogNew
    )
    .then( (response: [boolean, BlogNew]) => {
      if (response[0]) {
        this.blogNewsService.updateBlogNew(response[1]);
      }
    });  
  }

  deleteAllButtonHandler(): void {
    this.confirmFormComponent.show(
      'Borrar noticias', 
      'Se va a eliminar todas las noticias. ¿Desea continuar?'
    )
    .then( (confirm: boolean) => {
      if (confirm) {
        this.blogNewsService.deleteAll();
       }
    });
  }

  deleteBlogNewEventHandler(blogNew: BlogNew) {
    this.confirmFormComponent.show(
      'Borrar noticia', 
      `Se va a eliminar la noticia "${blogNew.title}". ¿Desea continuar?` 
    )
    .then( (confirm: boolean) => {
      if (confirm) {
        this.blogNewsService.deleteBlogNew(blogNew.id);
       }
    });
  }

}
