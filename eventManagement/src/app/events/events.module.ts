import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { MaterialModule } from '../material/material.module';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from './components/event-list/event-list.component';
@NgModule({
  declarations: [
    fromContainers.containers,
    fromComponents.components,
    DialogContentComponent,
    EventListComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class EventsModule {}
