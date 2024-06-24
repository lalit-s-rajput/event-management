import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogContentComponent>) {}
  eventForm!: FormGroup;

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl<Date | null>(null, Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (this.eventForm?.valid) {
      console.log(this.eventForm.value);
      this.dialogRef.close(this.eventForm.value);
    }
  }
  closeDialog() {
    console.log('close called');
    this.dialogRef.close();
  }
}
