import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.css']
})
export class ConfirmFormComponent implements OnInit {

  title: string = 'Title';  
  text:  string = 'Text';

  @ViewChild('confirmFormTemplate')
  confirmForm: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  show(title: string, text: string): Promise<boolean> {
    this.title = title;
    this.text  = text;
    return (
      new Promise(
        (resolve, reject) => {
          try {
            this.modalService.open(this.confirmForm, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
              resolve(true);
            }, (reason) => {
              resolve(false);
            });
          } catch(error) {
            reject(error);
          }
        }
      )
    );
  }
}
