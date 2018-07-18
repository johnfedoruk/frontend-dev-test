import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LogoutComponent } from './logout.component';
import { AuthGuardService } from '../../../auth/services/auth-guard.service';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthConfig } from '../../../auth/auth.config';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutComponent ],
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
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
