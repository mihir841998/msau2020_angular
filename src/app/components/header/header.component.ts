import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  signOut()
  {
    this.authService.signOut();
    this._router.navigate(['login'])


  }

}
