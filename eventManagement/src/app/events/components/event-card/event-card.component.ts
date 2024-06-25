import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent {
  @Input() eventData: any;
  @Output() toDeleteCardId = new EventEmitter<number>();
  @Output() editCardData = new EventEmitter<any>();
  deleteCard(id: number) {
    this.toDeleteCardId.emit(id);
  }
  editCard(data: any) {
    this.editCardData.emit(data);
  }
}
