import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';

var firebaseConfig = {
  "apiKey": "AIzaSyBcWifa9JKUuSrEMTJQm35QUGKZrZf7KCw",
  "databaseURL": "https://tolgalist.firebaseio.com",
  "storageBucket": "tolgalist.appspot.com",
  "authDomain": "tolgalist.firebaseapp.com",
  "messagingSenderId": "610637531922",
  "projectId": "tolgalist"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
