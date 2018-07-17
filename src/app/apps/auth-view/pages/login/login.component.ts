import { Component, OnInit } from '@angular/core';
import {
  trigger, state, transition, animate, keyframes, style
} from '@angular/animations';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginState', [
      transition('* => error', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(0px)',
            offset: 0.00
          }),
          style({
            transform: 'translateX(10px)',
            offset: 0.20
          }),
          style({
            transform: 'translateX(-10px)',
            offset: 0.35
          }),
          style({
            transform: 'translateX(10px)',
            offset: 0.45
          }),
          style({
            transform: 'translateX(-10px)',
            offset: 0.50
          }),
          style({
            transform: 'translateX(10px)',
            offset: 0.55
          }),
          style({
            transform: 'translateX(-10px)',
            offset: 0.65
          }),
          style({
            transform: 'translateX(10px)',
            offset: 0.80
          }),
          style({
            transform: 'translateX(0px)',
            offset: 1.00
          }),
        ]))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public loginState: string;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  public async onSubmit($event): Promise<void> {
    $event.preventDefault();
    try {
      await this.auth.login(this.username, this.password);
      this.onSuccess();
    } catch (e) {
      this.onError();
    }
  }

  public onError(): void {
    this.loginState = 'error';
    setTimeout(() => this.loginState = undefined, 1000);
  }

  public onSuccess(): void {
    console.log('logged in');
  }

}
