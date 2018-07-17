import { Injectable, Inject } from '@angular/core';
import { AuthConfig } from '../auth.config';

@Injectable()
export class AuthService {

  constructor(
    @Inject('config') private config: AuthConfig
  ) { }

}
