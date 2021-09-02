import { Component, Input, OnInit } from '@angular/core';
import { Plain } from './model/plain.model';
import { popUpModalService } from './popup-modal-service';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html'
})
export class NgbdModalComponent implements OnInit {
  inputModal: Plain;
  headerText: string;
  bodyText: string;
  constructor(private popupModalService: popUpModalService) {}

  ngOnInit() {}
  open() {
    this.headerText = 'Select hotel?';
    this.bodyText =
      'Please confirm that you would like to override the customer(s) ability to self-select their preferred hotel. This is not recommended unless requesterd by customer(s)';
    const model = { header: this.headerText, body: this.bodyText };
    this.popupModalService.openModal(SimpleModalComponent, model);
  }
}
