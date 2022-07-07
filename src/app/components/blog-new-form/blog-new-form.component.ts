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
  blogNewFormTemplate: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  show(isNew: boolean, blogNew: BlogNew): Promise<[boolean, BlogNew]> {
    this.new     = isNew;
    this.blogNew = { ...blogNew };
    this.dateStr = formatDate(this.blogNew.date, 'yyyy-MM-dd', 'en-US');
    return (
      new Promise(
        (resolve, reject) => {
          try {
            this.modalService.open(this.blogNewFormTemplate, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
