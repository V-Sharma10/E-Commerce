import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate {
  path: import ('@angular/router').ActivatedRouteSnapshot[];
  route: import ('@angular/router').ActivatedRouteSnapshot;

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.pipe(map(user => {
      if (user) { return true; }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      // console.log(state.url);
      return false;
    }));

  }



}
