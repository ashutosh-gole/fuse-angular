import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-remaining-spent-area',
  templateUrl: './remaining-spent-area.component.html',
  styleUrls: ['./remaining-spent-area.component.css']
})
export class RemainingSpentAreaComponent implements OnChanges {
  @Input() remainingSpentDataInput: Array<any>;

  remainingValue: any;
  highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnChanges() {

    this.remainingValue = this.remainingSpentDataInput[0];

    this.chartOptions = {
      chart: {
        type: 'areaspline'
      },
      title: {
        text: ''
      },
      subtitle: {
        style: {
          position: 'absolute',
          right: '0px',
          bottom: '100px'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: -150,
        y: 100,
        floating: true,
        borderWidth: 1,
      },
      xAxis: {
        lineColor: 'transparent',
        gridLineWidth: 0,
        crosshair: {
          width: 2,
          color: 'gray'
        },
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        labels: {
          enabled: false
        }
      },
      yAxis: {
        lineColor: 'transparent',
        gridLineWidth: 0,
        offset: -20,
        // lineWidth: 1,
        // gridLineWidth: 1,
        height: '100%',
        title: {
          text: ''
        },
        labels: {
          enabled: false
        },
        min: 0
      },
      tooltip: {
        shared: true,
        valueSuffix: ''
      },
      plotOptions: {
      },
      credits: {
        enabled: false
      },
      series: [
        {
          color: '#35b8f1',
          lineColor: 'transparent',
          marker: {
            symbol: 'circle',
            fillColor: 'transparent',
            lineWidth: 0
          },
          name: 'REMAINING',
          data: this.remainingSpentDataInput[1]
        }
      ]
    };

  }

}