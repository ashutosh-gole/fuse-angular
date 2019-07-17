import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-visitors-area',
  templateUrl: './visitors-area.component.html',
  styleUrls: ['./visitors-area.component.css']
})
export class VisitorsAreaComponent implements OnChanges {
  @Input() visitorsDataInput: Array<any>;
  @Input() pageViewDataInput: Array<any>;

  highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnChanges() {
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
        categories: ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm']
      },
      yAxis: {
        offset: -20,
        lineWidth:1,
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
          color: '#1978f7',
          lineColor: '#1978f7',
          marker: {
            symbol: 'circle',
            fillColor: '#1978f7',
            lineWidth: 3
          },
          name: 'Page Views',
          data: this.pageViewDataInput
        },
        {
          color: '#5137a5',
          lineColor: '#5137a5',
          marker: {
            symbol: 'circle',
            fillColor: '#5137a5',
            lineWidth: 3
          },
          name: 'Visitors',
          data: this.visitorsDataInput
        }

      ]
    };

  }

}