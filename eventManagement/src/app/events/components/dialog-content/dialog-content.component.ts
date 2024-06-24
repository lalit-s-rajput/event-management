import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss'],
})
export class DialogContentComponent implements OnInit {
  eventForm!: FormGroup;
  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (this.eventForm?.valid) {
      console.log(this.eventForm);
    }
  }
  closeDialog() {
    console.log('close called');
  }
}
