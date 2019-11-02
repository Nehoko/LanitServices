import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-drive-friend',
  templateUrl: './drive-friend.component.html',
  styleUrls: ['./drive-friend.component.css']
})
export class DriveFriendComponent implements OnInit {

  constructor(private cookie: CookieService) { }

  ngOnInit() {
    this.cookie.set('login', 'driveFriend');
  }

}
