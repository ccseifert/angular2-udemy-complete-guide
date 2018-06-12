import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCMY9jAN69Ym7xeD7RWde2yzW4EJmEqt4k',
      authDomain: 'ng-recipe-book-bb0b3.firebaseapp.com'
    });
  }
}
