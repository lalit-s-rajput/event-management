import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventData, EventsData } from 'src/app/core/interface/interface';

//export const selectEvent = (state: EventsData) => state.results;
export const selectResults = createFeatureSelector<EventsData>('event');

export const selectEventData = createSelector(
  selectResults,
  (state: EventsData) => state.results
);
