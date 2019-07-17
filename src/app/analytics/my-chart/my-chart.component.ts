import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnChanges {
  @Input() data: Array<any>;
  highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnChanges() {
    this.chartOptions = {
      chart: {
        backgroundColor: '#1e88e5',
        type: 'area'
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
        backgroundColor: 'pink'

      },
      xAxis: {
        lineColor: 'transparent',
        categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
        labels: {
          style: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        gridLineColor: '#ffffff',
        gridLineWidth: 0,
        height: '100%',
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return '';
          }
        },
        min: 0
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': ' + this.y;
        }
      },
      plotOptions: {
        area: {
          fillOpacity: 0.5
        }
      },
      credits: {
        enabled: false
      },
      series: [
        {
          lineColor: '#1e88e5',
          marker: {
            symbol: 'circle',
            fillColor: '#1e88e5',
            lineWidth: 2
          },
          name: 'Sales',
          data: this.data
        }
      ]
    };
  }

}