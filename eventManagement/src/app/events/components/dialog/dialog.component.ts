import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { EventData } from 'src/app/core/interface/interface';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}
  DialogRef!: MatDialogRef<DialogContentComponent>;
  searchValue: string = '';
  @Input() set openWithData(data: EventData) {
    if (data) {
      this.openDialogWithData(data);
    }
  }
  @Output() eventFormData = new EventEmitter();
  @Output() editedEventFormData = new EventEmitter();
  @Output() searchData = new EventEmitter();
  getSearchValue() {
    this.searchData.emit(this.searchValue);
  }
  openDialog() {
    if (!this.dialog.openDialogs.length) {
      this.DialogRef = this.dialog.open(DialogContentComponent, {
        width: '600px',
        autoFocus: true,
        closeOnNavigation: true,
      });

      this.DialogRef.afterClosed().subscribe((result) => {
        if (result) this.eventFormData.emit(result);
      });
    }
  }
  openDialogWithData(data: EventData) {
    this.DialogRef = this.dialog.open(DialogContentComponent, {
      width: '600px',
      autoFocus: true,
      closeOnNavigation: true,
      data: data,
    });

    this.DialogRef.afterClosed().subscribe((result) => {
      if (result) this.editedEventFormData.emit(result);
    });
  }
}
