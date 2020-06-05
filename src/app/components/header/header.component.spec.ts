import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';


import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import {UserService} from '../../service/user.service'
import { FormsModule }   from '@angular/forms';
import { AuthService } from "angularx-social-login";
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
  import { RouterTestingModule } from '@angular/router/testing'
  import { Router} from '@angular/router'

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let spy:any
  let spy2:any
  let service:any
  let router:any
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
      declarations: [ HeaderComponent ],
      providers:[UserService,{
        provide: AuthServiceConfig,
        useFactory: provideConfig
      },AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService) 
    router = TestBed.inject(Router)
  });

  it('test for logout option', () => {
    component.signOut()
    expect(service.logged_in).toEqual(false)
    expect(service.username).toEqual('')   
    
  });

  it('navigate to onbordee_page', () => {
    spy = spyOn(router, 'navigate')
    component.onbordee_page();
    expect(router.navigate).toHaveBeenCalled()    
  });

  it('navigate to trends_page', () => {
    spy = spyOn(router, 'navigate')
    component.onbordee_page();
    expect(router.navigate).toHaveBeenCalled()    
  });

  it('navigate to log_page', () => {
    spy = spyOn(router, 'navigate')
    component.log_page();
    expect(router.navigate).toHaveBeenCalled()    
  });

  it('navigate to trends_page', () => {
    spy = spyOn(router, 'navigate')
    component.trends_page();
    expect(router.navigate).toHaveBeenCalled()    
  });

});
