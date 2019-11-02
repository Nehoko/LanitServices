import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiningComponent } from './dining/dining.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import { HomeComponent } from './home/home.component';
import { RouteTaxiComponent } from './route-taxi/route-taxi.component';
import { DriveFriendComponent } from './drive-friend/drive-friend.component';
import {CookieService} from "ngx-cookie-service";

@NgModule({
  declarations: [
    AppComponent,
    DiningComponent,
    HomeComponent,
    RouteTaxiComponent,
    DriveFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
