import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogNew } from 'src/app/interfaces/blog-new.interface';

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

  dateStr: string = formatDate(this.blogNew.date, 'yyyy-MM-dd', 'en-US');

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

  show(isNew: boolean, blogNew: BlogNew): Promise<[boolean, BlogNew]> {
    this.new     = isNew;
    this.blogNew = { ...blogNew };
    this.dateStr = formatDate(this.blogNew.date, 'yyyy-MM-dd', 'en-US');
    return (
      new Promise(
        (resolve, reject) => {
          try {
            this.modalService.open(this.blogNewForm, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
              // Guardar
              this.blogNew.date = new Date(this.dateStr);
              resolve([true, this.blogNew]);
            }, (reason) => {
              // Cancelar
              resolve([false, this.blogNew]);
            });
          } catch(error) {
            reject(error);
          }
        }
      )
    );
  }
}
