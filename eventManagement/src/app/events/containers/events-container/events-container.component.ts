import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { EventData } from 'src/app/core/interface/interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss'],
})
export class EventsContainerComponent implements OnInit {
  eventListData$: BehaviorSubject<EventData[]> | null = null;
  constructor(private eventService: EventsService) {}
  ngOnInit(): void {
    this.eventListData$ = this.eventService.getEventsData();
  }
  getEventData(data: EventData) {
    this.eventService.setEventData(data);
  }
  deleteCard(id: number) {
    this.eventService.deleteEvent(id);
  }
  editedEventForm(data: EventData) {
    this.eventService.editEvent(data);
  }
  getSearchString(inputString: string) {
    this.eventService.filterBasedOnSearch(inputString);
  }
}
