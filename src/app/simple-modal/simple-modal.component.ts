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
  selector: 'ngbd-modal-content',
  templateUrl: './simple-modal.component.html'
})
export class SimpleModalComponent implements OnInit {
  @Input() public inputModal: any;
  //@ContentChild(TemplateRef, { static: false }) childModal: TemplateRef<any>;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    debugger;
    console.log(this.inputModal);
  }
}
