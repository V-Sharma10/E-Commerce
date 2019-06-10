import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;


  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  login() {
    // tslint:disable-next-line:prefer-const
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    // console.log(localStorage.getItem('returnUrl'));
    const provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    this.afAuth.auth.signInWithRedirect(provider);
    // firebase.auth().signInWithRedirect(provider);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

    // get appUser$(): Observable<AppUser> {
    //   return this.user$.pipe(
    //     switchMap(user => this.userService.get(user.uid).valueChanges()));
    // }
    get appUser$(): Observable<AppUser> {
      return this.user$.pipe(
        switchMap(user => {
          if (user) { return this.userService.get(user.uid).valueChanges(); }

          // return Observable.of(null);
          return of(null);
        }));
    }
}
