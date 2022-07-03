import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {    
  }
}
