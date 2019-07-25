import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-task-distribution-pie',
  templateUrl: './task-distribution-pie.component.html',
  styleUrls: ['./task-distribution-pie.component.css']
})
export class TaskDistributionPieComponent implements OnChanges {
  @Input() taskDataInput: Array<any>;
  @Input() taskAddedCompletedInput: Array<any>;

  taskAdded: number = 594;
  taskCompleted: number = 287;
  highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnChanges() {

    this.taskAdded = this.taskAddedCompletedInput[0];
    this.taskCompleted = this.taskAddedCompletedInput[1];
    
    this.chartOptions = {
      chart: {
        plotBorderWidth: null,
        plotShadow: false
      },
      // for hide credits => highcharts.com
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      tooltip: {
      },
      plotOptions: {
        pie: {
          shadow: false,
          center: ['50%', '50%'],
          size: '40%',
          innerSize: '70%'
        }
      },
      series: [{
        type: 'pie',
        name: 'task distribution',
        data: this.taskDataInput
      }]
    };

  }

}