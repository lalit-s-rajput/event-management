import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { eventRoutes } from './events-routes';

const routes: Routes = eventRoutes;
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class EventsRoutingModule {}
