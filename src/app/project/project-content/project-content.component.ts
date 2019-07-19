import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-project-content',
    templateUrl: './project-content.component.html',
    styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit {

    salesData: number[] = [540, 539, 538, 539, 540, 539, 540];
    isActive = false;

    selectedMenuItem:string='ACME Corp. Backend App';
    projectMenuArr: string[] = ['ACME Corp. Backend App', 'ACME Corp. Frontend App', 'Creapond', 'Withinpixels'];

    ngOnInit() {
    }

    public onMenuItemClick(item) {
        this.selectedMenuItem = item;
    }

    public changeDates(dates: string) {

        if (dates === '1MONTH') {
            this.salesData = [540, 539, 538, 539, 540, 539, 540];
        }
        else if (dates === '1WEEK') {
            this.salesData = [538, 539, 538, 539, 538, 540, 540];
        }
        else if (dates === '1DAY') {
            this.salesData = [541, 539, 540, 539, 540, 538, 540];
        }

    }

}