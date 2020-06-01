import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import {UserService} from '../../service/user.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router,private authService: AuthService,private userservice: UserService) { }

  ngOnInit(): void {
  }

  signOut()
  {
    this.authService.signOut();
    this._router.navigate(['login'])
  }
  search_by_id(data)
  {
    console.log(data)
    this.userservice.get_onbordee_by_id(data.id).subscribe(
      res=>{

      }
    )
  }

}
