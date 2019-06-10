// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router/src/utils/preactivation';
// import { AuthService } from './auth.service';
// import { UserService } from './user.service';
// import { Observable } from 'rxjs';
// import { map, switchMap } from 'rxjs/operators';
// import { Pipe } from '@angular/core';
// import { AppUser } from './models/app-user';


// @Injectable({
//   providedIn: 'root'
// })
// export class AdminAuthGuardService implements CanActivate {
//   path: import ('@angular/router').ActivatedRouteSnapshot[];
//   route: import ('@angular/router').ActivatedRouteSnapshot;

//   constructor(private auth: AuthService, private userService: UserService) { }


//   // canActivate(): Observable<boolean> {
//   //   return this.auth.user$.pipe(switchMap(user => {
//   //     return this.userService.get(user.uid);
//   //   })).pipe(map(appUser => appUser.isAdmin));
//   // }
//   // canActivate(): Observable<boolean> {
//   //   return this.auth.user$.switchMap(user =>
//   //     this.userService.get(user.uid)).pipe(map((appUser: any) => appUser.isAdmin));
//   // }
//   // canActivate(): Observable<boolean> {
//   //   return this.auth.user$.switchMap(user =>
//   //     this.userService.get(user.uid)).map((appUser: any) => appUser.isAdmin);
//   // }


//   canActivate(): Observable<boolean> {
//     return this.auth.user$.pipe(
//       switchMap(user => this.userService.get(user.uid).valueChanges()),
//       map(appUser => appUser.isAdmin)
//     )
//   }

// }


import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
    private _path: import('@angular/router').ActivatedRouteSnapshot[];
  public get path(): import('@angular/router').ActivatedRouteSnapshot[] {
    return this._path;
  }
  public set path(value: import('@angular/router').ActivatedRouteSnapshot[]) {
    this._path = value;
  }
  route: import ('@angular/router').ActivatedRouteSnapshot;


  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    // console.log('accessed appUser');
    // // tslint:disable-next-line:prefer-const
    // var admin: Observable<boolean> = this.auth.user$.pipe(
    //   switchMap(user => this.userService.get(user.uid).valueChanges())).pipe(
    //     map(appUser => appUser.isAdmin));
    // console.log(admin);
    // return this.auth.user$
    //   .pipe(switchMap(user => this.userService.get(user.uid).valueChanges()))
    //   .pipe(map(appUser => appUser.isAdmin));

    return this.auth.appUser$
    .pipe(
      map(appUser => appUser.isAdmin));
  }


}
