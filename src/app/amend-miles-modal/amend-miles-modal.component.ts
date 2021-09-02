import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FollowUpModalComponent } from '../follow-up-modal/follow-up-modal.component';
import { Plain } from '../model/plain.model';
import { popUpModalService } from '../popup-modal-service';

@Component({
  selector: 'amend-miles',
  templateUrl: './amend-miles-modal.component.html'
})
export class AmendMilesModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    public popupMpdalSerive: popUpModalService
  ) {}

  ngOnInit() {}

  openAnotherModal() {
    this.popupMpdalSerive.openModalWithComponent(FollowUpModalComponent);
  }
}
