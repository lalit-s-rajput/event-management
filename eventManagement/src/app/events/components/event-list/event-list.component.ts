import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  _eventList: any;
  constructor() {}
  @Output() eventFormData = new EventEmitter();
  @Output() eventCardId = new EventEmitter<number>();
  @Input() set eventList(data: any) {
    this._eventList = data;
  }
  getFormData(data: any) {
    this.eventFormData.emit(data);
  }
  getCardId(id: number) {
    this.eventCardId.emit(id);
  }
}
