import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { AuthService } from './apps/auth/services/auth.service';
import { AuthConfig } from './apps/auth/auth.config';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                NavbarComponent
            ],
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
            ],
            imports: [
              HttpClientTestingModule,
              RouterTestingModule
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
