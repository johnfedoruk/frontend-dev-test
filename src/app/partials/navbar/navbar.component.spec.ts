import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';
import { AuthService } from '../../apps/auth/services/auth.service';
import { AuthConfig } from '../../apps/auth/auth.config';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
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
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('authenticated', () => {
    it('should return false if account is undefined', () => {
        component['account'] = undefined;
        expect(component.authenticated).toBeFalsy();
    });
    it('should return true if account is not undefined', () => {
        component['account'] = {username: 'test', password: 'test', expires: 0};
        expect(component.authenticated).toBeTruthy();
    });
  });

  describe('name', () => {
    it('should return an empty string if account is undefined', () => {
        component['account'] = undefined;
        expect(component.name).toEqual('');
    });
    it('should return the account\'s username if account is not undefined', () => {
        const username = 'testing';
        component['account'] = {username, password: 'test', expires: 0};
        expect(component.name).toEqual(username);
    });
  });
});
