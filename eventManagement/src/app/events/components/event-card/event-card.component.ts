import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventData } from 'src/app/core/interface/interface';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent {
  @Input() eventData: EventData | undefined;
  @Output() toDeleteCardId = new EventEmitter<number>();
  @Output() editCardData = new EventEmitter<EventData>();
  deleteCard(id: number) {
    this.toDeleteCardId.emit(id);
  }
  editCard(data: EventData) {
    this.editCardData.emit(data);
  }
}
