import { Component, Input } from '@angular/core';
import { popUpModalService } from './popup-modal-service';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modal-component.html'
})
export class NgbdModalComponent {
  constructor(private popupModalService: popUpModalService) {}

  open() {
    this.popupModalService.openModal(SimpleModalComponent);
  }
}
