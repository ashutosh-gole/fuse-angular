import { Component, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-device-pie',
  templateUrl: './device-pie.component.html',
  styleUrls: ['./device-pie.component.css']
})
export class DevicePieComponent {

  highcharts = Highcharts;
  
  chartOptions = {
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
      pointFormat: '<b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        size: '75%',
        innerSize: '75%'
      }
    },
    series: [{
      type: 'pie',
      name: 'devices',
      data: [
        ['Desktop', 92.8],
        ['Mobile', 6.1],
        ['Tablet', 1.1],
      ] 
    }]
  };

}