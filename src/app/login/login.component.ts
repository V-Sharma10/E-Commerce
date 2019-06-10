import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  login() {
    // var provider = new firebase.auth.GoogleAuthProvider();
    // // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    // this.afAuth.auth.signInWithRedirect(provider);
    // // firebase.auth().signInWithRedirect(provider);

    this.auth.login();
  }

}
