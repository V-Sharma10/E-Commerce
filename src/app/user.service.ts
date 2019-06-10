import { Injectable } from '@angular/core';
// import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from './models/app-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
    // }).then(x => {console.log('updated!'); console.log(user.displayName); console.log( user.email ) } );
  }

  // get(uid: string): AngularFireObject<AppUser> {
  //   return this.db.object('/users/' + uid);
  // }
  // get(uid: string): Observable<any> {
  //   return this.db.object('/users/' + uid).valueChanges();
  // }
  get(uid: string): AngularFireObject<AppUser> {

    // console.log(this.db.object('/users/' + uid));
    return this.db.object('/users/' + uid);
  }

}
