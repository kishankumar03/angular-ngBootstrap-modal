import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  TemplateRef
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent {
  @Input() name;
  @ContentChild('childModal') childModal: TemplateRef<any>;

  constructor(public activeModal: NgbActiveModal) {}
}
