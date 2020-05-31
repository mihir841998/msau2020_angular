import { Component, OnInit } from '@angular/core';
import {UserService } from '../../service/user.service'
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit 
{
  user:any

  constructor(private userService :UserService,private _router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data)
  {
    console.log(data)
    this.userService.check_user_credentials(data).subscribe((body:{"result":string,"access":string})=>{
      console.log("mihir in login"+ body)
      if(body.access=="-1")
      {
        console.log("Invalid")
      }
      else{
        console.log("Valid")
        this.userService.user_access=+body.access
        this._router.navigate(['mainpage'])
      }
    });
  }

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response)=>
      {
        console.log(response)
        this.user = response
        this._router.navigate(['mainpage'])
      });
    }
   
   
    signOut(): void {
      this.authService.signOut();
    }

    
    


  

}
