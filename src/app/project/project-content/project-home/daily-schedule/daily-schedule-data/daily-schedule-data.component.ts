import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-daily-schedule-data',
  templateUrl: './daily-schedule-data.component.html',
  styleUrls: ['./daily-schedule-data.component.css']
})
export class DailyScheduleDataComponent implements OnChanges {
  @Input() scheduleDataInput: Array<any>;

  constructor() { }

  ngOnChanges() {
    // console.log(this.scheduleDataInput);
    // this.scheduleTaskName = this.scheduleDataInput[0].taskName;
    // this.scheduletaskTime = this.scheduleDataInput[1].taskName;
  }

}