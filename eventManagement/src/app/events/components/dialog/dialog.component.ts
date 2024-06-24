import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(public dialog: MatDialog) {}
  DialogRef!: MatDialogRef<DialogContentComponent>;
  @Input() set openWithData(data: any) {
    if (data) {
      this.openDialogWithData(data);
    }
  }
  @Output() eventFormData = new EventEmitter();
  @Output() editedEventFormData = new EventEmitter();
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
  openDialogWithData(data: any) {
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
