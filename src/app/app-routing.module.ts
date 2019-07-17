import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsComponent } from './analytics/analytics.component';
import { ProjectComponent } from './project/project.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/analytics',
    pathMatch: 'full'
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
