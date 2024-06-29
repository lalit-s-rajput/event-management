import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventData } from 'src/app/core/interface/interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  _eventList: EventData[] | null = null;
  _openWithData!: EventData;
  pageSizeOptions = [3, 6, 9];
  slicedData: EventData[] | undefined = undefined;
  constructor() {}
  @Output() eventFormData = new EventEmitter();
  @Output() editedEventForm = new EventEmitter();
  @Output() eventCardId = new EventEmitter<number>();
  @Output() searchString = new EventEmitter<string>();
  @Input() set eventList(data: EventData[] | null) {
    this._eventList = data;
    this.slicedData = this._eventList?.slice(0, 2);
  }
  getFormData(data: EventData) {
    this.eventFormData.emit(data);
  }
  getCardId(id: number) {
    this.eventCardId.emit(id);
  }
  editCard(data: EventData) {
    this._openWithData = { ...data }; // added this because every time we want to open edit dialog
  }
  editedEventFormData(data: EventData) {
    this.editedEventForm.emit(data);
  }
  getSearchData(inputString: string) {
    this.searchString.emit(inputString);
  }
  OnPageChange(data: any) {
    const startIndex = data.pageIndex * data.pageSize;
    let endIndex = startIndex + data.pageSize;
    if (endIndex > this._eventList!.length) {
      endIndex = this._eventList!.length;
    }
    this.slicedData = this._eventList!.slice(startIndex, endIndex);
  }
}
