import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,

} from '@angular/material';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,


    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule],

  exports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,



    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule],
})
export class CustomMaterialModule { }