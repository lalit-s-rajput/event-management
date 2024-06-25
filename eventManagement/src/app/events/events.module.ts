import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [fromContainers.containers, fromComponents.components],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
})
export class EventsModule {}
