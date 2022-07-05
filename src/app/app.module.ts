import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlogNewComponent } from './components/blog-new/blog-new.component';
import { BlogNewFormComponent } from './components/blog-new-form/blog-new-form.component';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmFormComponent } from './components/confirm-form/confirm-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogNewComponent,
    BlogNewFormComponent,
    ConfirmFormComponent
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
