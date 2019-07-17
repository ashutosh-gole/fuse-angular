import { Component, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-visits-bar',
  templateUrl: './visits-bar.component.html',
  styleUrls: ['./visits-bar.component.css']
})
export class VisitsBarComponent {

  highcharts = Highcharts;

  chartOptions = {
    chart: {
      backgroundColor: '#fff',
      type: 'column'
    },
    // for hide credits => highcharts.com
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      lineColor: 'transparent',
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      crosshair: true,
      labels: {
        enabled: false
      }
    },
    yAxis: {
      gridLineColor: '#ffffff',
      gridLineWidth: 0,
      min: 0,
      title: {
        text: ''
      },
      labels: {
        enabled: false
      }
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y;
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      showInLegend: false,
      pointWidth: 15,
      name: 'Visits',
      data: [432, 428, 327, 363, 456, 267, 231],
      color: '#f44336'
    }]
  };

}