import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { MaterialModule } from '../material/material.module';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    fromContainers.containers,
    fromComponents.components,
    DialogContentComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class EventsModule {}
