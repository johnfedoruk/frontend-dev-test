import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthConfig } from '../auth.config';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {
          provide: 'config',
          useValue: <AuthConfig>{
            login_url: '',
            me_url: '',
            secure_path: '',
          }
        }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
