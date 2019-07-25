import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task-distribution',
    templateUrl: './task-distribution.component.html',
    styleUrls: ['./task-distribution.component.css']
})
export class TaskDistributionComponent implements OnInit {

    taskData: [string, number][] = [['Frontend', 15], [' Backend ', 20], [' API ', 38], ['Issues', 27]];
    taskAddedCompletedData:number[]=[594,287];
    ngOnInit() {
    }

    public changeWeek(week: string) {

        if (week === '1') {
            this.taskData = [['Frontend', 15], [' Backend ', 20], [' API ', 38], ['Issues', 27]];
            this.taskAddedCompletedData=[594,287];
        }
        else if (week === '2') {
            this.taskData = [['Frontend', 19], [' Backend ', 16], [' API ', 42], ['Issues', 23]];
            this.taskAddedCompletedData=[526,260];
        }
        else if (week === '3') {
            this.taskData = [['Frontend', 18], [' Backend ', 17], [' API ', 40], ['Issues', 25]];
            this.taskAddedCompletedData=[487,193];
        }

    }

}