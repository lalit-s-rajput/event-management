import { Route } from '@angular/router';
import * as fromContainer from './events/containers';
import { AppComponent } from './app.component';
export const allRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./events/events-routing.module').then(
            (m) => m.EventsRoutingModule
          ),
      },
    ],
  },
];
