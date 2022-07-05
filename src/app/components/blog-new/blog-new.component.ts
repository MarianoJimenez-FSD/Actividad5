import { Component, NgModule, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogNew } from 'src/app/interfaces/blog-new.interface';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit {    

  @Input()
  blogNew: BlogNew = {
    id: -1,
    title: "",
    image: "",
    text: "",
    date: new Date('2022-07-02')
  };

  @Output()
  editBlogNewEvent: EventEmitter<BlogNew> = new EventEmitter<BlogNew>();

  constructor() { }

  ngOnInit(): void {    
  }

  editButtonClickHandler() {
    this.editBlogNewEvent.emit(this.blogNew);
  }
}
