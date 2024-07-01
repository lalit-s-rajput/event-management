import { createReducer, on } from '@ngrx/store';
import { EventData, EventsData } from 'src/app/core/interface/interface';
import { getEvents } from './event.action';
import { state } from '@angular/animations';
export const initialState: EventsData = {
  results: [
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
  ],
};

export const eventReducer = createReducer(
  initialState,
  on(getEvents, (state) => {
    return {
      ...state,
      results: [...state.results],
    };
  })
);
