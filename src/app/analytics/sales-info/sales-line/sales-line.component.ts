import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sales-line',
  templateUrl: './sales-line.component.html',
  styleUrls: ['./sales-line.component.css']
})
export class SalesLineComponent implements OnChanges {
  @Input() salesDataInput: Array<any>;

  highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnChanges() {
    this.chartOptions = {
      chart: {
        type: 'line'
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
          width: 1,
          color: 'gray'
        },
        categories: [],
        labels: {
          enabled: false
        },
      },
      yAxis: {
        offset: -20,
        lineWidth: 1,
        gridLineWidth: 1,
        height: '100%',
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        },
        min: 538.0
      },
      tooltip: {
        crosshairs: true,
        shared: true
      },
      plotOptions: {
      },
      credits: {
        enabled: false
      },
      series: [
        {
          color: '#1978f7',
          lineColor: '#1978f7',
          marker: {
            symbol: 'circle',
            fillColor: '#1978f7',
            lineWidth: 2
          },
          name: 'Sales',
          data: this.salesDataInput
        }
      ]
    };

  }

}