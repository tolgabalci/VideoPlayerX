import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";

@Injectable()
export class LoggedInGuardService implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.auth.authState.map(auth => {
      if (auth === null) {
        this.router.navigate(["/login"]);
        return false;
      } else {
        return true;
      }
    });
  }
}
