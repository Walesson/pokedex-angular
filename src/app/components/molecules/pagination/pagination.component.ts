import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() total: string = '';
  @Input() previus: string = '';
  @Input() next: string = '';

  @Output() previusEvent  = new EventEmitter();
  @Output() nextEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  nextAction() {
    if(this.next) {
      this.nextEvent.emit()
    }
  }

  previusAction() {
    if(this.previus) {
      this.previusEvent.emit()
    }
  }

}
