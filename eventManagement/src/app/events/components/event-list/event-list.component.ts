import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  _eventList: any;
  _openWithData: any;
  constructor() {}
  @Output() eventFormData = new EventEmitter();
  @Output() editedEventForm = new EventEmitter();
  @Output() eventCardId = new EventEmitter<number>();
  @Output() searchString = new EventEmitter<string>();
  @Input() set eventList(data: any) {
    this._eventList = data;
  }
  getFormData(data: any) {
    this.eventFormData.emit(data);
  }
  getCardId(id: number) {
    this.eventCardId.emit(id);
  }
  editCard(data: any) {
    this._openWithData = { ...data }; // added this because every time we want to open edit dialog
  }
  editedEventFormData(data: any) {
    this.editedEventForm.emit(data);
  }
  getSearchData(inputString: string) {
    this.searchString.emit(inputString);
  }
}
