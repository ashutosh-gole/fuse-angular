import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-issue-need-test-area',
  templateUrl: './issue-need-test-area.component.html',
  styleUrls: ['./issue-need-test-area.component.css']
})
export class IssueNeedTestAreaComponent implements OnChanges {
  @Input() issueNeedTestDataInput: Array<any>;

  needTestValue: any;
  highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnChanges() {

    this.needTestValue = this.issueNeedTestDataInput[0];

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
          lineColor: '#35b8f1',
          marker: {
            symbol: 'circle',
            fillColor: '#35b8f1',
            lineWidth: 0
          },
          name: 'CREATED',
          data: this.issueNeedTestDataInput[1]
        }
      ]
    };

  }

}