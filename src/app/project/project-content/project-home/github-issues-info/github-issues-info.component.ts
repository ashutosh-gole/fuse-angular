import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-github-issues-info',
    templateUrl: './github-issues-info.component.html',
    styleUrls: ['./github-issues-info.component.css']
})
export class GithubIssuesInfoComponent implements OnInit {

    issuesData: number[] = [42, 28, 43, 34, 20, 25, 22];
    closedIssuesData: number[] = [11, 10, 8, 11, 8, 10, 17];

    // issue highchart area data
    issueCreatedData: any[] = [[54], [3, 2, 1, 4, 8, 8, 4]];
    issueClosedData: any[] = [[26], [6, 3, 7, 5, 5, 4, 7]];
    issueReopenedData: any[] = [[2], [3, 2, 1, 4, 8, 8, 4]];
    issueWontFixedData: any[] = [[4], [6, 5, 4, 5, 7, 4, 7]];
    issueNeedTestData: any[] = [[8], [6, 3, 7, 5, 5, 4, 7]];
    issueFixedData: any[] = [[14], [5, 7, 4, 6, 5, 3, 2]];

    ngOnInit() {
    }

    public changeWeek(week: string) {

        if (week === '1') {
            this.issuesData = [42, 28, 43, 34, 20, 25, 22];
            this.closedIssuesData = [11, 10, 8, 11, 8, 10, 17];

            this.issueCreatedData = [[54], [3, 2, 1, 4, 8, 8, 4]];
            this.issueClosedData = [[26], [6, 3, 7, 5, 5, 4, 7]];
            this.issueReopenedData = [[2], [3, 2, 1, 4, 8, 8, 4]];
            this.issueWontFixedData = [[4], [6, 5, 4, 5, 7, 4, 7]];
            this.issueNeedTestData = [[8], [6, 3, 7, 5, 5, 4, 7]];
            this.issueFixedData = [[14], [5, 7, 4, 6, 5, 3, 2]];
        }
        else if (week === '2') {
            this.issuesData = [37, 24, 51, 31, 29, 17, 31];
            this.closedIssuesData = [12, 8, 7, 13, 7, 6, 10];

            this.issueCreatedData = [[46], [6, 3, 7, 5, 5, 4, 7]];
            this.issueClosedData = [[31], [6, 5, 4, 5, 7, 4, 7]];
            this.issueReopenedData = [[5], [5, 7, 8, 8, 6, 4, 1]];
            this.issueWontFixedData = [[3], [6, 3, 7, 5, 5, 4, 7]];
            this.issueNeedTestData = [[7], [5, 7, 8, 8, 6, 4, 1]];
            this.issueFixedData = [[17], [6, 5, 4, 5, 7, 4, 7]];
        }
        else if (week === '3') {
            this.issuesData = [37, 32, 39, 27, 18, 24, 20];
            this.closedIssuesData = [9, 12, 9, 12, 7, 8, 16];

            this.issueCreatedData = [[48], [5, 8, 5, 6, 7, 8, 7]];
            this.issueClosedData = [[27], [3, 2, 1, 4, 8, 8, 4]];
            this.issueReopenedData = [[4], [6, 3, 7, 5, 5, 4, 7]];
            this.issueWontFixedData = [[6], [5, 7, 4, 6, 5, 3, 2]];
            this.issueNeedTestData = [[10], [6, 5, 4, 5, 7, 4, 7]];
            this.issueFixedData = [[21], [5, 7, 8, 8, 6, 4, 1]];
        }

    }

}