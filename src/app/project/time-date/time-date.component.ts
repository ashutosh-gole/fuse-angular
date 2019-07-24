import { Component } from '@angular/core';

@Component({
  selector: 'app-time-date',
  templateUrl: './time-date.component.html',
  styleUrls: ['./time-date.component.css']
})
export class TimeDateComponent {

  today: any;

  // for display dynamic time 
  // setInterval() infinite time run
  constructor() {
    setInterval(() => {
      this.today = new Date();
    }, 1);
  }

}