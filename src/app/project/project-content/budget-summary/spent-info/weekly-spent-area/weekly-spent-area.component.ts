import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-weekly-spent-area',
  templateUrl: './weekly-spent-area.component.html',
  styleUrls: ['./weekly-spent-area.component.css']
})
export class WeeklySpentAreaComponent implements OnChanges {
  @Input() weeklySpentDataInput: Array<any>;

  weeklyValue: any;
  highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnChanges() {

    this.weeklyValue = this.weeklySpentDataInput[0];

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
          name: 'WEEKLY',
          data: this.weeklySpentDataInput[1]
        }
      ]
    };

  }

}