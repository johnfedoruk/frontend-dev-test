import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { AuthConfig } from './auth.config';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
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
        {
          provide: 'config',
          useValue: config
        }
      ]
    };
  }
}
