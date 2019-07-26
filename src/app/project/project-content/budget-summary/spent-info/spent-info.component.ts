import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-spent-info',
    templateUrl: './spent-info.component.html',
    styleUrls: ['./spent-info.component.css']
})
export class SpentInfoComponent implements OnInit {

    weeks: string[] = ['This Week', 'Last Week', '2 Weeks Ago'];
    currentWeek: string = 'This Week';

    // issue highchart area data
    weeklySpentData: any[] = [[3630.15], [2, 6, 5, 4, 5, 4, 3]];
    totalSpentData: any[] = [[34758.34], [6, 4, 7, 5, 5, 4, 7]];
    remainingSpentData: any[] = [[89.24166], [2, 4, 8, 7, 6, 3, 2]];
    totalBudget:number=124.00000;

    ngOnInit() {
    }

    public changeWeek(week: string) {

        this.currentWeek = week;

        if (week === 'This Week') {
            this.weeklySpentData = [[3630.15], [2, 6, 5, 4, 5, 4, 3]];
            this.totalSpentData = [[34758.34], [6, 4, 7, 5, 5, 4, 7]];
            this.remainingSpentData = [[89.24166], [2, 4, 8, 7, 6, 3, 2]];
            this.totalBudget=124.00000;
        }
        else if (week === 'Last Week') {
            this.weeklySpentData = [[1445.34], [4, 6, 2, 4, 5, 4, 1]];
            this.totalSpentData = [[31128.19], [5, 7, 8, 8, 6, 4, 7]];
            this.remainingSpentData = [[92.87181], [3, 2, 1, 4, 8, 8, 7]];
            this.totalBudget=124.00000;
        }
        else if (week === '2 Weeks Ago') {
            this.weeklySpentData = [[3630.15], [5, 7, 8, 8, 6, 4, 7]];
            this.totalSpentData = [[34758.34], [2, 6, 5, 4, 5, 4, 3]];
            this.remainingSpentData = [[89.24166], [4, 6, 2, 4, 5, 4, 1]];
            this.totalBudget=124.00000;
        }

    }

}