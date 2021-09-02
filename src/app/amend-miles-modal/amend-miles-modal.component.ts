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
  selector: 'amend-miles',
  templateUrl: './amend-miles-modal.component.html'
})
export class AmendMilesModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
