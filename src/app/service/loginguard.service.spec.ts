import { TestBed } from '@angular/core/testing';

import { LoginguardService } from './loginguard.service';
import {UserService} from './user.service'

import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

describe('LoginguardService', () => {
  let service: LoginguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      providers:[UserService]
    });
    service = TestBed.inject(LoginguardService);
  });

  it('test canAcctivate for logged_in=true of loginguard', () => 
  {
    sessionStorage.setItem('loggedIn','true')
    const result = service.canActivate();
    expect(result).toEqual(true)    
    sessionStorage.clear()
  });

  it('test canAcctivate for logged_in=false of loginguard', () => 
  {
    // sessionStorage.setItem('loggedIn','true')
    const result = service.canActivate();
    expect(result).toEqual(false)    
    // sessionStorage.clear()
  });
});
