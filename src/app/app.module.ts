import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as Material from "@angular/material";
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


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    DiningComponent,
    HomeComponent,
    RouteTaxiComponent,
    DriveFriendComponent,
  ],
  imports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule,
    Material.MatChipsModule,
    Material.MatTooltipModule,
    Material.MatNativeDateModule,
    Material.MatProgressSpinnerModule,

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,'gagaga'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [
    CookieService,
    AngularFireAuth,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
