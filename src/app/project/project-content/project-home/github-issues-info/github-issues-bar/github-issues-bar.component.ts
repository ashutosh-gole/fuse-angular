import { Component, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-github-issues-bar',
  templateUrl: './github-issues-bar.component.html',
  styleUrls: ['./github-issues-bar.component.css']
})
export class GithubIssuesBarComponent implements OnChanges {
  @Input() issuesDataInput: Array<any>;
  @Input() closedIssuesDataInput: Array<any>;

  highcharts = Highcharts;
  chartOptions: any;
  constructor() { }

  ngOnChanges() {
    this.chartOptions = {
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
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        crosshair: true,
        labels: {
          enabled: true
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
          enabled: true
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
        },
        series: {
          stacking: 'normal',
          states: {
            hover: {
              enabled: false
            }
          }
        }
      },
      series: [{
        showInLegend: false,
        pointWidth: 28,
        name: 'closed issues',
        data: this.closedIssuesDataInput,
        color: '#C6ECFD'
      },
      {
        showInLegend: false,
        pointWidth: 28,
        name: 'issues',
        data: this.issuesDataInput,
        color: '#35b8f1'
      }
      ]
    };

  }

}