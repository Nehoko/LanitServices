import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDlSvfm4hTW-y8Ogx7saOOUSpQBk0F4vX4',
  authDomain: 'gagaga-48b10.firebaseapp.com',
  databaseURL: 'https://gagaga-48b10.firebaseio.com',
  projectId: 'gagaga-48b10',
  storageBucket: 'gagaga-48b10.appspot.com',
};

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
    firebase.initializeApp(config);
  }

  ngOnInit(): void {
    if (this.auth.user$) {
      this.route.navigate(['/home']);
    }
  }
}
