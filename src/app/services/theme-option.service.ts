import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeOptionService {

    openThemeOptionPanel = new BehaviorSubject(false);

    public open() {
        this.openThemeOptionPanel.next(true);
    }

    public close() {
        this.openThemeOptionPanel.next(false);
    }

}