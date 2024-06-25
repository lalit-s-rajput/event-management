import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss'],
})
export class EventsContainerComponent {
  eventListData$: any;
  constructor(private eventService: EventsService) {
    this.eventListData$ = this.eventService.getEventsData();
  }
  getEventData(data: any) {
    this.eventService.setEventData(data);
  }
  deleteCard(id: number) {
    this.eventService.deleteEvent(id);
  }
  editedEventForm(data: any) {
    this.eventService.editEvent(data);
  }
  getSearchString(inputString: string) {
    this.eventService.filterBasedOnSearch(inputString);
  }
}
