import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-analytics',
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

    years: string[] = ['2016', '2017', '2018'];
    currentYear: string = '2016';
    DATA: number[] = [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9];

    ngOnInit() {
        // var chart = new Highcharts.Chart(this.chartOptions);
    }

    public changeYear(year: string) {

        this.currentYear = year;
        
        if (year === '2016') {
            this.DATA = [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9];
            // this.chartOptions.series[0].data = [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9];
        }
        else if (year === '2017') {
            this.DATA = [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8];
            // this.chartOptions.series[0].data =[2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8];
        }

        else if (year === '2018') {
            this.DATA = [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9];
            // this.chartOptions.series[0].data = [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9];
        }

        // console.log(year);
        // console.log("series:::" +this.chartOptions.series)
    }

}