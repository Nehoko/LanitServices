import {Routes} from "@angular/router";
import {DiningComponent} from "./dining/dining.component";
import {HomeComponent} from "./home/home.component";
import {RouteTaxiComponent} from "./route-taxi/route-taxi.component";
import {DriveFriendComponent} from "./drive-friend/drive-friend.component";
import {SayRoomComponent} from "./say-room/say-room.component";

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dining', component: DiningComponent},
  {path: 'routeTaxi', component: RouteTaxiComponent},
  {path: 'driveFriend', component: DriveFriendComponent},
  {path: 'sayRoom', component: SayRoomComponent}
  ];
