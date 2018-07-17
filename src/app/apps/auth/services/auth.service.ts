import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Account } from 'common';

import { AuthConfig } from '../auth.config';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

const TOKEN = 'jwt';
const ACCOUNT = 'account';

@Injectable()
export class AuthService {

  public profile$: Subject<Account> = new BehaviorSubject<Account>(undefined);

  constructor(
    @Inject('config') private config: AuthConfig,
    private http: HttpClient,
    private router: Router
  ) {
    if (this.token && this.account) {
      this.profile$.next(this.account);
    }
  }

  public async login(username: string, password: string): Promise<void> {
    return new Promise<void>(
      async (resolve, reject) => {
        let token: string;
        let account: Account;
        try {
          token = await this.getToken(username, password);
          account = await this.getAccount(token);
          this.token = token;
          this.account = account;
          this.profile$.next(this.account);
          this.router.navigateByUrl(this.config.secure_path);
          resolve();
        } catch (e) {
          reject(e);
        }
      }
    );
  }

  public logout(): void {
    window.sessionStorage.clear();
    this.profile$.next(this.account);
    setTimeout(
      this.router.navigateByUrl(this.config.secure_path),
      1234
    );
  }

  private async getToken(username: string, password: string): Promise<any> {
    const url: string = this.config.login_url;
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Basic ${btoa(`${username}:${password}`)}`
    });
    const responseType: any = 'text';
    const config = {
      responseType,
      headers
    };
    return await this.http.get<string>(url, config).toPromise<string>();
  }

  public async getAccount(token: string): Promise<Account> {
    const url: string = this.config.me_url;
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `JWT ${token}`
    });
    const responseType: any = 'json';
    const config = {
      responseType,
      headers
    };
    return await this.http.get<Account>(url, config).toPromise<Account>();
  }

  public set token(token: string) {
    window.sessionStorage.setItem(TOKEN, token);
  }

  public get token(): string {
    return window.sessionStorage.getItem(TOKEN) || undefined;
  }

  public set account(account: Account) {
    window.sessionStorage.setItem(ACCOUNT, JSON.stringify(account));
  }

  public get account(): Account {
    return JSON.parse(window.sessionStorage.getItem(ACCOUNT)) || undefined;
  }

}
