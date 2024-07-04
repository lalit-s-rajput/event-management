import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { EventData, EventsData } from 'src/app/core/interface/interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Store } from '@ngrx/store';
import { selectEventData } from '../../store/events/event.selector';
import { Observable } from 'rxjs';
import { deleteEvent, editEvent } from '../../store/events/event.action';

@Component({
  selector: 'app-events-container',
  templateUrl: './events-container.component.html',
  styleUrls: ['./events-container.component.scss'],
})
export class EventsContainerComponent implements OnInit {
  eventListData$: any;
  constructor(
    private store: Store<{ event: EventData[] }>,
    private eventService: EventsService
  ) {}
  ngOnInit(): void {
    //this.eventListData$ = this.eventService.getEventsData();
    this.eventListData$ = this.store.select(selectEventData);
  }
  getEventData(data: EventData) {
    this.eventService.setEventData(data);
  }
  deleteCard(id: number) {
    //this.eventService.deleteEvent(id);
    this.store.dispatch(deleteEvent({ id: id }));
  }
  editedEventForm(data: EventData) {
    //this.eventService.editEvent(data);
    this.store.dispatch(editEvent({ eventData: data }));
  }
  getSearchString(inputString: string) {
    this.eventService.filterBasedOnSearch(inputString);
  }
}
