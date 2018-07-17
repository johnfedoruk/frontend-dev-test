import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthViewComponent } from './auth-view.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthViewComponent, LoginComponent]
})
export class AuthViewModule { }
