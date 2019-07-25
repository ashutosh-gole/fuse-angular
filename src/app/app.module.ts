import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CustomMaterialModule } from './custom-material.module';

// theme option service
import { ThemeOptionService } from './services/theme-option.service';

// perfect scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThemeOptionsComponent } from './theme-options/theme-options.component';

import { AnalyticsComponent } from './analytics/analytics.component';
import { MyChartComponent } from './analytics/my-chart/my-chart.component';
import { ConversionBarComponent } from './analytics/conversion-bar/conversion-bar.component';
import { ImpressionsLineComponent } from './analytics/impressions-line/impressions-line.component';
import { VisitsBarComponent } from './analytics/visits-bar/visits-bar.component';
import { DevicePieComponent } from './analytics/device-pie/device-pie.component';
import { VisitorsPageViewComponent } from './analytics/visitors-page-view/visitors-page-view.component';
import { VisitorsAreaComponent } from './analytics/visitors-page-view/visitors-area/visitors-area.component';
import { CampaignsComponent } from './analytics/campaigns/campaigns.component';
import { SalesInfoComponent } from './analytics/sales-info/sales-info.component';
import { SalesLineComponent } from './analytics/sales-info/sales-line/sales-line.component';
import { UsersMapComponent } from './analytics/users-map/users-map.component';

import { ProjectComponent } from './project/project.component';
import { ProjectContentComponent } from './project/project-content/project-content.component';
import { ProjectTeamMembersComponent } from './project/project-content/project-team-members/project-team-members.component';
import { TimeDateComponent } from './project/time-date/time-date.component';
import { CityWeatherComponent } from './project/city-weather/city-weather.component';
import { ProjectHomeComponent } from './project/project-content/project-home/project-home.component';
import { TaskDistributionComponent } from './project/project-content/project-home/task-distribution/task-distribution.component';
import { DailyScheduleComponent } from './project/project-content/project-home/daily-schedule/daily-schedule.component';
import { DailyScheduleDataComponent } from './project/project-content/project-home/daily-schedule/daily-schedule-data/daily-schedule-data.component';
import { TaskDistributionPieComponent } from './project/project-content/project-home/task-distribution/task-distribution-pie/task-distribution-pie.component';
import { BudgetSummaryComponent } from './project/project-content/budget-summary/budget-summary.component';
import { BudgetDistributionPieComponent } from './project/project-content/budget-summary/budget-distribution-pie/budget-distribution-pie.component';
import { BudgetDetailComponent } from './project/project-content/budget-summary/budget-detail/budget-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    // Header Toolbar Component
    AppHeaderComponent,
    // Footer Toolbar Component
    AppFooterComponent,
    // Analytics Page Component
    AnalyticsComponent,
    CalendarComponent,
    PageNotFoundComponent,
    ThemeOptionsComponent,
    HighchartsChartComponent,
    MyChartComponent,
    ConversionBarComponent,
    ImpressionsLineComponent,
    VisitsBarComponent,
    DevicePieComponent,
    VisitorsPageViewComponent,
    VisitorsAreaComponent,
    CampaignsComponent,
    SalesInfoComponent,
    SalesLineComponent,
    UsersMapComponent,
    // Project Page Component
    ProjectComponent,
    ProjectContentComponent,
    ProjectTeamMembersComponent,
    TimeDateComponent,
    CityWeatherComponent,
    ProjectHomeComponent,
    TaskDistributionComponent,
    TaskDistributionPieComponent,
    DailyScheduleComponent,
    DailyScheduleDataComponent,
    BudgetSummaryComponent,
    BudgetDistributionPieComponent,
    BudgetDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
