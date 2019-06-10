import { Component } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase';
// import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  // user$: Observable<firebase.User>;
  appUser: AppUser;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
    // afAuth.authState.subscribe(x => console.log(x));
    // afAuth.authState.subscribe(user => this.user = user);

  }


  logout() {
    // this.afAuth.auth.signOut();
    this.auth.logout();
  }
}
