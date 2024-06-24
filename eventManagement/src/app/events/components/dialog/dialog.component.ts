import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() eventFormData = new EventEmitter();
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
}
