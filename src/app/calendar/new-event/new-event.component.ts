import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  userForm: FormGroup;
  getErrorMessage = "Please Enter Title"

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      title: ['', [Validators.required]]
    });
  }

  ngOnInit() {

  }

  onSubmit(userF) {
    console.log(userF);
    console.log("***********************************************");
    console.log(this.userForm.value);
  }

}