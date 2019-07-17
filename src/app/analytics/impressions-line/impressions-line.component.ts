import { Component, Output, EventEmitter } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-impressions-line',
  templateUrl: './impressions-line.component.html',
  styleUrls: ['./impressions-line.component.css']
})
export class ImpressionsLineComponent {

  highcharts = Highcharts;

  chartOptions = {
    chart: {
      backgroundColor: '#fff',
      type: 'spline'
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
      categories: [],
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
        return '<b> Jan ' + this.x + '</b><br/>' +
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
      name: 'Impressions',
      data: [67000, 54000, 82000, 57000, 72000, 57000, 87000, 72000, 89000, 98700, 112000, 136000, 110000, 149000, 98000],
      color: '#7082e8'
    }]
  };

}