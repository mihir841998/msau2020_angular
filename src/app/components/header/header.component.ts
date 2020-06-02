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

  constructor(private _router: Router,private authService: AuthService,private userservice: UserService) { }

  isloggedin = false
  

  ngOnInit(): void {
  }

  signOut()
  {
    this.authService.signOut();    
    sessionStorage.clear()
    
    this._router.navigate(['login'])
  }

  display_hello_logout()
  {
      this.isloggedin = true
  }
  

}
