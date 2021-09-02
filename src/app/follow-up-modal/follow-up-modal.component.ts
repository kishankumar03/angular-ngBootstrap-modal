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
  selector: 'follow-up-modal',
  templateUrl: './follow-up-modal.component.html'
})
export class FollowUpModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
