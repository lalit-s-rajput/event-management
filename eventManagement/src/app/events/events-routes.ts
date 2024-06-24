import { Route } from '@angular/router';
import * as fromContainer from './containers';
export const eventRoutes: Route[] = [
  {
    path: '',
    component: fromContainer.EventsContainerComponent,
  },
];
