import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  TemplateRef
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Plain } from '../model/plain.model';

@Component({
  selector: 'hotel-modal',
  templateUrl: './hotel-modal.component.html'
})
export class HotelModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
