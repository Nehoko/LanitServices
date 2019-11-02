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
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import {environment} from "../environments/environment.prod";



@NgModule({
  declarations: [
    AppComponent,
    DiningComponent,
    HomeComponent,
    RouteTaxiComponent,
    DriveFriendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,'gagaga'),
    AngularFirestoreModule
  ],
  providers: [
    CookieService,
    AngularFireAuth,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
