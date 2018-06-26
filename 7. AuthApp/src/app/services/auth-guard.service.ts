import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next);
    if (this.authService.isAuthenticated()) {
      console.log('Pasó el guardia');
      return true;
    } else {
      console.error('No pasó el guardia');
      return false;
    }
  }
}
