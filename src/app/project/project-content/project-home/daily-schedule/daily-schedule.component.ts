import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-daily-schedule',
    templateUrl: './daily-schedule.component.html',
    styleUrls: ['./daily-schedule.component.css']
})
export class DailyScheduleComponent implements OnInit {

    scheduleData = [{
        taskName: 'Group Meeting',
        taskTime: 'In 32 minutes, Room 1B'
    },
    {
        taskName: 'Coffee Break',
        taskTime: '10:30 AM'
    },
    {
        taskName: 'Public Beta Release',
        taskTime: '11:00 AM'
    },
    {
        taskName: 'Lunch',
        taskTime: '12:10 PM'
    },
    {
        taskName: 'Dinner with David',
        taskTime: '17:30 PM'
    },
    {
        taskName: 'Jane\'s Birthday Party',
        taskTime: '19:30 PM'
    },
    {
        taskName: 'Overseer\'s Retirement Party',
        taskTime: '21:30 PM'
    }
    ];

    ngOnInit() {
    }

    public changeDay(day: string) {

        if (day === 'Today') {
            this.scheduleData = [{
                taskName: 'Group Meeting',
                taskTime: 'In 32 minutes, Room 1B'
            },
            {
                taskName: 'Coffee Break',
                taskTime: '10:30 AM'
            },
            {
                taskName: 'Public Beta Release',
                taskTime: '11:00 AM'
            },
            {
                taskName: 'Lunch',
                taskTime: '12:10 PM'
            },
            {
                taskName: 'Dinner with David',
                taskTime: '17:30 PM'
            },
            {
                taskName: 'Jane\'s Birthday Party',
                taskTime: '19:30 PM'
            },
            {
                taskName: 'Overseer\'s Retirement Party',
                taskTime: '21:30 PM'
            }
            ];
        }
        else if (day === 'Tomorrow') {
            this.scheduleData = [{
                taskName: 'Marketing Meeting',
                taskTime: '09:00 AM'
            },
            {
                taskName: 'Public Announcement',
                taskTime: '11:00 AM'
            },
            {
                taskName: 'Lunch',
                taskTime: '12:10 PM'
            },
            {
                taskName: 'Meeting with Beta Testers',
                taskTime: '15:00 AM'
            },
            {
                taskName: 'Live Stream',
                taskTime: '17:30 PM'
            },
            {
                taskName: 'Release Party',
                taskTime: '19:30 PM'
            },
            {
                taskName: 'CEO\'s Party',
                taskTime: '22:30 PM'
            }
            ];
        }

    }

}