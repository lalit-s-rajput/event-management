import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventData } from 'src/app/core/interface/interface';
@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: EventData,
    public dialogRef: MatDialogRef<DialogContentComponent>
  ) {}
  eventForm!: FormGroup;

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl<Date | null>(null, Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
    if (this.data !== null) {
      this.eventForm.patchValue(this.data);
    }
  }
  onSubmit() {
    if (this.eventForm?.valid) {
      console.log(this.eventForm.value);
      if (this.data) {
        this.dialogRef.close(
          Object.assign(this.eventForm.value, { id: this.data.id })
        );
      } else {
        this.dialogRef.close(this.eventForm.value);
      }
    }
  }
  closeDialog() {
    console.log('close called');
    this.dialogRef.close();
  }
}
