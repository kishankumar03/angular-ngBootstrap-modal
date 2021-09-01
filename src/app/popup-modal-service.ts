import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class popUpModalService {
  constructor(private modalService: NgbModal) {}

  openModal(inputModalComponent: any) {
    const modalRef = this.modalService.open(inputModalComponent);
    modalRef.componentInstance.name = 'World';
  }
}
