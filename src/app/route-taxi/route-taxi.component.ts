import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-route-taxi',
  templateUrl: './route-taxi.component.html',
  styleUrls: ['./route-taxi.component.css']
})
export class RouteTaxiComponent implements OnInit {

  constructor(private cookie: CookieService) { }

  ngOnInit() {
    this.cookie.set('login', 'routeTaxi');
  }

}
