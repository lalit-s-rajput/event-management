import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromContainers from './containers';
@NgModule({
  declarations: [fromContainers.containers, fromComponents.components],
  imports: [CommonModule],
})
export class EventsModule {}
