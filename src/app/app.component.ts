import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lanitService';

  constructor(
    public auth: AuthService,
    private route: Router,
    private cookie: CookieService) {
  }

  ngOnInit(): void {

  }
}
