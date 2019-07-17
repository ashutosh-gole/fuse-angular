import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {

  isVisible: boolean = true;
  conutryImage: string = '../../assets/country/us.png';
  countryText: string = 'EN';

  @Output() public sidenavToggle = new EventEmitter();
  @Output() public rightSidenavToggle = new EventEmitter();

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  public onToggleRightSidenav = () => {
    this.rightSidenavToggle.emit();
  }

  public showTextbox() {
    this.isVisible = false;
  }

  public hideTextbox() {
    this.isVisible = true;
  }

  public selectLanguage(lang) {
    if (lang === 'English') {
      this.countryText = 'EN';
      this.conutryImage = '../../assets/country/us.png';
    }
    else {
      this.countryText = 'TR';
      this.conutryImage = '../../assets/country/tr.png';
    }
  }

}