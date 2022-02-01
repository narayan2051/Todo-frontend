import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { HardCodedAuthenticationService } from './services/hard-coded-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardServiceService implements CanActivate {
  constructor(
    private auth: HardCodedAuthenticationService,
    private rout: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isUserLoggedIn()) return true;
    this.rout.navigate(['login']);
    return false;
  }
}
