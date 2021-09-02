import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Plain } from './model/plain.model';

@Injectable()
export class popUpModalService {
  constructor(private modalService: NgbModal) {}

  openModal(inputModalComponent: any, inputModal: any) {
    const modalRef = this.modalService.open(inputModalComponent);
    modalRef.componentInstance.inputModal = inputModal;
  }

  openModalWithComponent(inputModalComponent: any) {
    this.modalService.open(inputModalComponent);
  }
}
