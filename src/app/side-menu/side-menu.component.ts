import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() user: firebase.User;

  constructor(private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

logout() {
    this.angularFireAuth.auth.signOut();
  }
}
