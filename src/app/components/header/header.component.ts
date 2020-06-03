import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import {UserService} from '../../service/user.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router,private authService: AuthService,public userservice: UserService) { }

  isloggedin = false
  

  ngOnInit(): void {
  }

  signOut()
  {
    this.authService.signOut();    
    sessionStorage.clear()
    this.userservice.logged_in=false
    this.userservice.username=''
    this._router.navigate(['login'])
  }

  
  

}
