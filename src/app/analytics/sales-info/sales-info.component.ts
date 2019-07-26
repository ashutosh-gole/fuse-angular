import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sales-info',
    templateUrl: './sales-info.component.html',
    styleUrls: ['./sales-info.component.css']
})
export class SalesInfoComponent implements OnInit {

    dates: string[] = ['1DAY', '1WEEK', '1MONTH'];
    currentDate: string = '1DAY';
    salesData: number[] = [540, 539, 538, 539, 540, 539, 540];
    isActive = false;

    ngOnInit() {
    }

    public changeDate(date: string) {

        this.currentDate = date;

        if (date === '1MONTH') {
            this.salesData = [540, 539, 538, 539, 540, 539, 540];
        }
        else if (date === '1WEEK') {
            this.salesData = [538, 539, 538, 539, 538, 540, 540];
        }
        else if (date === '1DAY') {
            this.salesData = [541, 539, 540, 539, 540, 538, 540];
        }

    }

}