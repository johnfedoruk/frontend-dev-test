import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthConfig } from '../auth.config';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

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
          },
        }
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
