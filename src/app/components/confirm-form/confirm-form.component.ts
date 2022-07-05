import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmEventParams } from 'src/app/interfaces/confirm-event-params';

@Component({
  selector: 'app-confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.css']
})
export class ConfirmFormComponent implements OnInit {

  title: string = 'Title';  
  text: string = 'Text';
  confirmAction: number = -1;
  confirmActionParam: any = null;

  @Output()
  confirmEvent: EventEmitter<ConfirmEventParams> = new EventEmitter<ConfirmEventParams>();

  @ViewChild('confirmFormTemplate')
  confirmForm: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  show(title: string, text: string, confirmAction: number, confirmActionParam: any): void {
    this.title              = title;
    this.text               = text;
    this.confirmAction      = confirmAction;
    this.confirmActionParam = confirmActionParam;
    this.modalService.open(this.confirmForm, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.confirmEvent.emit({
        confirmAction:      this.confirmAction,
        confirmActionParam: this.confirmActionParam
      });
    }, (reason) => {
      //console.log(`Dismissed: ${reason}`);
    });
  }

}
