import { Injectable } from '@angular/core';
import { BehaviorSubject, map, retry } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  eventsData$: any = new BehaviorSubject([]);
  constructor() {}
  getEventsData() {
    return this.eventsData$;
  }
}
