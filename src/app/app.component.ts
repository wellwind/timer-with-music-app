import { FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: firebase.User;

  constructor(private angularFireAuth: AngularFireAuth) {
    angularFireAuth.authState.subscribe(user => {
      if (!user) {
        this.login();
      } else {
        this.user = user;
      }
    });
  }

  login() {
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
