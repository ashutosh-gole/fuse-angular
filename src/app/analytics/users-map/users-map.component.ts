import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { } from 'googlemaps';
declare var google:any;

@Component({
    selector: 'app-users-map',
    templateUrl: './users-map.component.html',
    styleUrls: ['./users-map.component.css']
})
export class UsersMapComponent implements AfterViewInit {

    @ViewChild('mapArea', { static: false }) mapElement: any;

    map: google.maps.Map;

    ngAfterViewInit(): void {
        const mapProperties = {
            center: new google.maps.LatLng(18.5204,73.8567),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       this.map = new google.maps.Map(this.mapElement.nativeElement,mapProperties);
     }
}