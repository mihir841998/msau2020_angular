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
  invalid=false
  

  constructor(private userService :UserService,private _router: Router,private authService: AuthService) { }

  ngOnInit(): void {
  }

  onClickSubmit(data)
  {
    console.log(data)
    this.userService.check_user_credentials(data).subscribe((body:{"result":string,"access":string,"name":string,"id":string})=>{
      console.log("mihir in login")
      console.log(body)
      if(body.access=="-1")
      {
        console.log("Invalid")
        // sessionStorage.setItem('loggedIn','false')
        this.invalid=true
      }
      else{
        console.log("Valid")
        sessionStorage.setItem('loggedIn','true')
        sessionStorage.setItem('access',body.access)
        sessionStorage.setItem('name',body.name)
        sessionStorage.setItem('id',body.id)
        sessionStorage.setItem('first_time_to_main_page','true')
        this.userService.user_access=+body.access
        this.userService.logged_in=true
        this.userService.username=body.name
        this._router.navigate(['allusers'])
      }
    });
  }

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response)=>
      {
        
        sessionStorage.setItem('loggedIn','true')
        sessionStorage.setItem('first_time_to_main_page','true')
        sessionStorage.setItem("name",response.name)
        console.log('in sign in with google '+response.email)
        this.userService.logged_in=true
        this.userService.username=response.name
        this.userService.get_access_by_email(response.email).subscribe((res:{name:string,access:string,id:string})=>{
          console.log(res)
          
          sessionStorage.setItem("access",res.access)
          sessionStorage.setItem("id",res.id)
        })
        this.user = response
        this._router.navigate(['allusers'])
      });
    }
   
   
    signOut(): void {
      this.authService.signOut();
    }

    
    


  

}
