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
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ProjectComponent } from './project/project.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ThemeOptionsComponent } from './theme-options/theme-options.component';

import { HighchartsChartComponent } from 'highcharts-angular';
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

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AnalyticsComponent,
    ProjectComponent,
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
    UsersMapComponent
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
