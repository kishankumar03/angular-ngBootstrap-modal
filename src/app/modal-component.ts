import { Component, Input, OnInit } from '@angular/core';
import { AmendMilesModalComponent } from './amend-miles-modal/amend-miles-modal.component';
import { FollowUpModalComponent } from './follow-up-modal/follow-up-modal.component';
import { HotelModalComponent } from './hotel-modal/hotel-modal.component';
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
      'Please confirm that you would like to override the customer(s) ability to self-select their preferred hotel. This is not recommended unless requesterd by customer(s).';
    const model = { header: this.headerText, body: this.bodyText };
    this.popupModalService.openModal(SimpleModalComponent, model);
  }

  openFollowUp() {
    this.headerText = 'Request follow-up?';
    this.bodyText =
      'Please confirm that customer(s) would like a customer care agent to follow-up with them after their trip.';
    const model = { header: this.headerText, body: this.bodyText };
    this.popupModalService.openModal(SimpleModalComponent, model);
  }

  openHotelModal() {
    this.popupModalService.openModalWithComponent(HotelModalComponent);
  }

  openFollowUpModal() {
    this.popupModalService.openModalWithComponent(FollowUpModalComponent);
  }

  amendMiles() {
    this.popupModalService.openModalWithComponent(AmendMilesModalComponent);
  }
}
