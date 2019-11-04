import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import * as firebase from 'firebase';




declare var google: any;
let map: any;
let marker: any;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
let infowindow: any;
const iconBase = 'http://maps.google.com/mapfiles/ms/icons/';

export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

@Component({
  selector: 'app-route-taxi',
  templateUrl: './route-taxi.component.html',
  styleUrls: ['./route-taxi.component.css']
})
export class RouteTaxiComponent implements OnInit {

  @ViewChild('map', {static: false}) mapElement: ElementRef;
  map = new Map(); // Все точки
  buses = [];
  icon = { // car icon
    path: 'M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805',
    scale: 0.4,
    fillColor: "#f41c19", //<-- Car Color, you can change it
    fillOpacity: 1,
    strokeWeight: 1,
    anchor: new google.maps.Point(0, 5),
    // rotation: data.val().angle //<-- Car angle
  };

  constructor(private cookie: CookieService) {
    firebase.database().ref('raw-locations/').on('value', resp => {
      console.log(resp.toJSON());

      this.buses= [];
      this.buses = snapshotToArray(resp);
      for (const bus of this.buses) {
        this.createMarkers(bus);
      }
    });
    this.initMap();
  }

  ngOnInit() {
  }

  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: 55.8072588, lng: 37.6220635 },
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();


      marker = new google.maps.Marker({
        position: { lat: 55.792228, lng: 37.636552 },
        map,
        title: 'Click to zoom',
        icon: iconBase + 'blue-dot.png'
      });

      /*      map.addListener('center_changed', () => {
              window.setTimeout(() => {
                map.panTo(marker.getPosition());
              }, 3000);
            });*/

      marker.addListener('click', (event: any) => {
        console.log(marker.getPosition().lat());
        console.log(marker.getPosition().lng());
        infowindow.setPosition(event.latLng);
        infowindow.setContent('<h4>Остановка м. Рижская</h4>' +
          '<h5><a href="https://transport.lanit.ru/">Посмотреть расписание</a></h5>');
        infowindow.open(map, marker);
      });
    }, (error) => {
      console.log(error);
    }, options);
  }

  createMarkers(place: any) {
    this.map.delete(place.id)
    const latitude = parseFloat(place.lat);
    const longitude = parseFloat(place.lng);
    const busMarker = new google.maps.Marker({
      map,
      position: { lat: latitude, lng: longitude },
      icon: this.icon
    });
    this.map.set(place.id, busMarker);

    google.maps.event.addListener(busMarker, 'click', function() {
      infowindow.setContent('<h3>' + place.id + '</h3><p>Телефон водителя: ' + place.time);
      infowindow.open(map, this);
    });
  }

}
