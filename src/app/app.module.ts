import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogNewComponent } from './components/blog-new/blog-new.component';
import { BlogNewFormComponent } from './components/blog-new-form/blog-new-form.component';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BlogNewComponent,
    BlogNewFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
