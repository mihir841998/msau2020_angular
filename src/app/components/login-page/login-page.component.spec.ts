import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import {UserService} from '../../service/user.service'
import { FormsModule }   from '@angular/forms';
import { AuthService } from "angularx-social-login";
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
  import { RouterTestingModule } from '@angular/router/testing'

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let spy:any
  let spy2:any
  let service:any
  let  authservice :any
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("1004937025943-on8uitv66b1v1aia5ttnp06udpfc00t9.apps.googleusercontent.com")
    }  
  ]);
   
  function provideConfig() {
    return config;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[SocialLoginModule.initialize(config),HttpClientTestingModule,RouterTestingModule,FormsModule],
      declarations: [ LoginPageComponent ],
      providers:[UserService,{
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService)    
  });

  it('test for submit option login failure', () => {
    const mockData = {
      result: 'failure',
      access: '-1', 
      name:'mihir',
      id:'1'    
    };
    const data={
      id:'mihir',
      password:'mihir'
    }
    spy = spyOn(service, 'check_user_credentials').and.returnValue(of(mockData));
    component.onClickSubmit(data)
    expect(component.invalid).toEqual(true)    
  });
  it('test for submit option login success', () => {
    const mockData = {
      result: 'failure',
      access: '1', 
      name:'mihir',
      id:'null'    
    };
    const data={
      id:'mihir',
      password:'mihir'
    }
    spy = spyOn(service, 'check_user_credentials').and.returnValue(of(mockData));
    component.onClickSubmit(data)
    expect(sessionStorage.getItem('loggedIn')).toEqual('true');
    expect(sessionStorage.getItem('access')).toEqual('1');
    expect(sessionStorage.getItem('name')).toEqual('mihir');
    expect(sessionStorage.getItem('id')).toEqual('null');
    expect(sessionStorage.getItem('first_time_to_main_page')).toEqual('true');
    expect(service.user_access).toEqual(1)
    expect(service.logged_in).toEqual(true)
    expect(service.username).toEqual('mihir')
    // sessionStorage.clear()
  });

  it('test for google sign in', () => {
    authservice = TestBed.inject(AuthService)
    let respone1={
      name:'mihir',
      email:'mihir@gmail.com'
    }
    let respone2={
      name:'mihir',
      accesss:'1',
      id:'1'
    }
    spy = spyOn(authservice, 'signIn').and.returnValue(Promise.resolve(respone1));

    spy2 = spyOn(service,'get_access_by_email').and.returnValue(of(respone2));

    component.signInWithGoogle()
    expect(sessionStorage.getItem('loggedIn')).toEqual('true');
    expect(sessionStorage.getItem('access')).toEqual('1');
    expect(sessionStorage.getItem('name')).toEqual('mihir');
    expect(sessionStorage.getItem('id')).toEqual('null');
    // sessionStorage.clear()
  });
});
