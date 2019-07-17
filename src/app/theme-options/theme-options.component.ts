import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ThemeOptionService } from '../services/theme-option.service';

@Component({
  selector: 'app-theme-options',
  templateUrl: './theme-options.component.html',
  styleUrls: ['./theme-options.component.css']
})
export class ThemeOptionsComponent implements AfterViewInit {

  // using @ViewChild access template reference variable value in template
  @ViewChild('themeOptionsDrawer', { static: false }) themeOptionsDrawer;

  constructor(private themeOptionService: ThemeOptionService) { }

  ngAfterViewInit() {
    this.themeOptionService.openThemeOptionPanel.subscribe((result) => {
      if (result) {
        this.themeOptionsDrawer.open();
      } else {
        this.themeOptionsDrawer.close();
      }
    });
  }

  public closePanel() {
    this.themeOptionService.close();
  }

}