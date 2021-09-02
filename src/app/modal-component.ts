import { Component, Input } from '@angular/core';
import { Plain } from './model/plain.model';
import { popUpModalService } from './popup-modal-service';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html'
})
export class NgbdModalComponent {
  inputModal: Plain;
  constructor(private popupModalService: popUpModalService) {}

  open() {
    this.inputModal.header = 'Select hotel?';
    this.inputModal.body =
      'Please confirm that you would like to override the customer(s) ability to self-select their preferred hotel. This is not recommended unless requesterd by customer(s)';
    this.popupModalService.openModal(SimpleModalComponent, this.inputModal);
  }
}
