import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { VideosComponent } from "./videos/videos.component";
import { RouterModule, Route } from "@angular/router";
import { LoggedInGuardService } from "./services/logged-in-guard.service";
import { LoginComponent } from "./login/login.component";

var firebaseConfig = {
  apiKey: "AIzaSyBcWifa9JKUuSrEMTJQm35QUGKZrZf7KCw",
  databaseURL: "https://tolgalist.firebaseio.com",
  storageBucket: "tolgalist.appspot.com",
  authDomain: "tolgalist.firebaseapp.com",
  messagingSenderId: "610637531922",
  projectId: "tolgalist"
};

var route: Route[] = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  {
    path: ":color/videos/:category",
    component: VideosComponent,
    canActivate: [LoggedInGuardService]
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, VideosComponent, LoginComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(route)
  ],
  providers: [LoggedInGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
