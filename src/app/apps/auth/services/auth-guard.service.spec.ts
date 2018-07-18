import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AuthConfig } from '../auth.config';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        AuthService,
        {
          provide: 'config',
          useValue: <AuthConfig>{
            login_url: '',
            me_url: '',
            secure_path: '',
          }
        }
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
