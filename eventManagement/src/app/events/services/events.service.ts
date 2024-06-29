import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, retry } from 'rxjs';
import { EventData } from '../../core/interface/interface';
@Injectable({
  providedIn: 'root',
})
export class EventsService {
  initialData: EventData[] = [
    {
      id: 1,
      title: 'test1',
      date: '2024-06-10T18:30:00.000Z',
      location: 'pune',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      title: 'test2',
      date: '2024-06-10T18:30:00.000Z',
      location: 'pune',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      title: 'test3',
      date: '2024-06-10T18:30:00.000Z',
      location: 'pune',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];
  eventsData$: BehaviorSubject<EventData[]> = new BehaviorSubject(
    this.initialData
  );
  originalDataSet$: any = new BehaviorSubject([]);
  globalIdValue$: BehaviorSubject<number> = new BehaviorSubject(
    this.initialData.length
  );
  constructor() {}
  getEventsData() {
    this.originalDataSet$.next(this.eventsData$.value);
    return this.eventsData$;
  }
  setEventData(data: EventData) {
    this.globalIdValue$.next(this.globalIdValue$.value + 1);
    data.id = this.globalIdValue$.value;
    this.eventsData$.value.push(data);
    this.originalDataSet$.next(this.eventsData$.value);
  }
  deleteEvent(id: number) {
    const eventData = this.eventsData$.value.filter((item: any) => {
      return item.id !== id;
    });
    this.eventsData$.next(eventData);
    this.originalDataSet$.next(this.eventsData$.value);
  }
  editEvent(data: EventData) {
    let eventItem = this.eventsData$.value.find((item: any) => {
      return item.id === data.id;
    });
    if (eventItem) {
      eventItem = Object.assign(eventItem, data);
      this.originalDataSet$.next(this.eventsData$.value);
    }
  }
  filterBasedOnSearch(searchData: string) {
    if (!searchData.length) {
      this.eventsData$.next(this.originalDataSet$.value);
    } else {
      let dataLowerCase = searchData.toLowerCase();
      const eventData = this.originalDataSet$.value.filter((item: any) => {
        return (
          item.title.toLowerCase().includes(dataLowerCase) ||
          item.location.toLowerCase().includes(dataLowerCase)
        );
      });
      this.eventsData$.next(eventData);
    }
  }
}
