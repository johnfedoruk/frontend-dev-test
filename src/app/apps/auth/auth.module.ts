import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
  ],
  declarations: [AuthComponent]
})
export class AuthModule { }
