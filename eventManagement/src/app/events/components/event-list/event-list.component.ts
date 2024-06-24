import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  constructor(private eventService: EventsService) {}
}
