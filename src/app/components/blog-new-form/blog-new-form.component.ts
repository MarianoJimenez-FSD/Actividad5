import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogNew } from 'src/app/interfaces/blog-new.interface';
import { SaveBlogNewFormEventParams } from 'src/app/interfaces/save-blog-new-form-event-params';

@Component({
  selector: 'app-blog-new-form',
  templateUrl: './blog-new-form.component.html',
  styleUrls: ['./blog-new-form.component.css']
})
export class BlogNewFormComponent implements OnInit {
  
  new: boolean = true;  
  
  blogNew: BlogNew = {
    id: -1,
    title: "",
    image: "",
    text: "",
    date: new Date()
  };  

  @Output()
  saveBlogNewFormEvent: EventEmitter<SaveBlogNewFormEventParams> = new EventEmitter<SaveBlogNewFormEventParams>();

  @ViewChild('blogNewFormTemplate')
  blogNewForm: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  validateFields(): boolean {
    if (this.blogNew.title === '') {
      alert('Debe introducir el título.');
      return false;
    }
    else if (this.blogNew.image === '') {
      alert('Debe introducir una imagen.');
      return false;
    }
    else if (this.blogNew.text === '') {
      alert('Debe introducir el texto de la noticia.')
      return false;
    }
    else {
      return true;      
    }
  }

  show(isNew: boolean, blogNew: BlogNew): void {
    this.new = isNew;
    this.blogNew = { ...blogNew };
    this.modalService.open(this.blogNewForm, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.saveBlogNewFormEvent.emit({
        new: this.new,
        blogNew: this.blogNew        
      })
    }, (reason) => {
      //console.log(`Dismissed: ${reason}`);
    });
  }
}
