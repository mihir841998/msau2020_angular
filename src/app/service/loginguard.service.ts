import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import {UserService} from './user.service'

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate {

  constructor(private router : Router,private userService : UserService) { }

  canActivate(): boolean {
    if (sessionStorage.getItem('loggedIn')=='true') { // determine if the uder is logged in from this method.
        return true;
    }
    this.router.navigate(['login']);
    return false;
}
}
