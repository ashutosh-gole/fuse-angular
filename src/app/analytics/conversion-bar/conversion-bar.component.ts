import { Component, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-conversion-bar',
  templateUrl: './conversion-bar.component.html',
  styleUrls: ['./conversion-bar.component.css']
})
export class ConversionBarComponent {

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
      pointWidth: 12,
      name: 'Conversion',
      data: [221, 428, 492, 471, 413, 344, 294],
      color:'#35b8f1'
    }]
  };

}