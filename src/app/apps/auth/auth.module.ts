import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { AuthConfig } from './auth.config';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  declarations: [
    
  ]
})
export class AuthModule {
  static forRoot(config: AuthConfig): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuardService,
        {
          provide: 'config',
          useValue: config
        }
      ]
    };
  }
}
