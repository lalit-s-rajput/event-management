import { Action, createAction, props } from '@ngrx/store';
import { EventData } from 'src/app/core/interface/interface';

export const getEvents = createAction('getEvents');
export const deleteEvent = createAction('deleteEvent', props<{ id: number }>());
export const editEvent = createAction(
  'editEvent',
  props<{ eventData: EventData }>()
);
