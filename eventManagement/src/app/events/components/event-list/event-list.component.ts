import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  _eventList: any;
  _openWithData: any;
  pageSizeOptions = [3, 6, 9];
  slicedData: any;
  constructor() {}
  @Output() eventFormData = new EventEmitter();
  @Output() editedEventForm = new EventEmitter();
  @Output() eventCardId = new EventEmitter<number>();
  @Output() searchString = new EventEmitter<string>();
  @Input() set eventList(data: any) {
    this._eventList = data;
    this.slicedData = this._eventList.slice(0, 2);
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
  OnPageChange(data: any) {
    const startIndex = data.pageIndex * data.pageSize;
    let endIndex = startIndex + data.pageSize;
    if (endIndex > this._eventList.length) {
      endIndex = this._eventList.length;
    }
    this.slicedData = this._eventList.slice(startIndex, endIndex);
  }
}
