import { Injectable } from '@angular/core';
import { BlogNew } from '../interfaces/blog-new.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogNewsService {

  blogNews: Map<number, BlogNew> = new Map<number, BlogNew>();
  id: number = 1;
  
  constructor() {
    this.addBlogNew({
      id: -1,
      title: "Angular’s Vision for the Future",
      image: "https://miro.medium.com/max/700/1*FKPdrYfcTCV2XZino3_rdA.jpeg",
      text: "In the Angular 2021 recap and 2022 preview post, we shared our plans for 2022. As we are almost midway through 2022, this is a great time to give more insights into our long-term plan and some hints of what we might work on in 2023. Improving and simplifying the developer experience is a major theme we started to work on in 2022 and will continue into 2023 and beyond. We are excited to see the first step launch in v14 with Standalone components in developer preview.",
      date: new Date('2022-07-02')
    });

    this.addBlogNew({
      id: -1,
      title: "Angular at I/O 2022",
      image: "https://cdn-images-1.medium.com/max/400/0*ULvs_4zdRf8Fi8_4",
      text: "At I/O 2021 we had a blast announcing Angular DevTools and letting you use it in the Adventure world! We talked to hundreds of developers and shared insights about our partnership with TensorFlow.js. Hard to believe it’s already time for I/O 2022. This year you’ll find even more Angular content and get the opportunity to learn about the latest advancements coming to the framework!",
      date: new Date('2022-07-02')
    })
  }

  getBlogNews(): Map<number, BlogNew> {
    return this.blogNews;
  }

  addBlogNew(blogNew: BlogNew) {
    blogNew.id = this.id;
    this.blogNews.set(
      this.id,
      blogNew
    );
    this.id++;
  }  
}
