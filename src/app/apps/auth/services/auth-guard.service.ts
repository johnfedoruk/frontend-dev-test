import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Account } from 'common';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    try {
      const token: string = this.auth.token;
      const account: Account = await this.auth.getAccount(token);
      if (token && account) {
        return true;
      }
    } catch (e) { }
    this.router.navigate(['/', 'auth', 'login']);
    return false;
  }

}
