import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmendMilesModalComponent } from './amend-miles-modal/amend-miles-modal.component';
import { FollowUpModalComponent } from './follow-up-modal/follow-up-modal.component';
import { HotelModalComponent } from './hotel-modal/hotel-modal.component';

import { NgbdModalComponent } from './modal-component';
import { popUpModalService } from './popup-modal-service';

import { SimpleModalComponent } from './simple-modal/simple-modal.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [
    NgbdModalComponent,
    SimpleModalComponent,
    HotelModalComponent,
    FollowUpModalComponent,
    AmendMilesModalComponent
  ],
  exports: [NgbdModalComponent],
  bootstrap: [NgbdModalComponent],
  //entryComponents: [SimpleModalComponent], // this line would be needed in Angular 8 or older
  providers: [popUpModalService]
})
export class NgbdModalComponentModule {}
