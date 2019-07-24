import { Component, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-budget-distribution-pie',
  templateUrl: './budget-distribution-pie.component.html',
  styleUrls: ['./budget-distribution-pie.component.css']
})
export class BudgetDistributionPieComponent {

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
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        size: '40%'
            }
    },
    series: [{
      type: 'pie',
      name: 'budget distribution',
      data: [
        ['Wireframing', 12],
        ['Design', 17],
        ['Coding', 28],
        ['Marketing', 25],
        ['Extra', 15]
      ]
    }]
  };

}