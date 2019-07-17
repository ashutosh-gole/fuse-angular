import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-visitors-page-view',
    templateUrl: './visitors-page-view.component.html',
    styleUrls: ['./visitors-page-view.component.css']
})
export class VisitorsPageViewComponent implements OnInit {

    visitorsData: number[] = [410, 380, 320, 290, 190, 390, 250, 380, 300, 340, 220, 290];
    pageViewsData: number[] = [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800];

    ngOnInit() {
    }

    public changeDay(day: string) {

        if (day === 'Yesterday') {
            this.visitorsData = [190, 300, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290];
            this.pageViewsData = [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800];
        }
        else if (day === 'Today') {
            this.visitorsData = [410, 380, 320, 290, 190, 390, 250, 380, 300, 340, 220, 290];
            this.pageViewsData = [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800];
        }

    }

}