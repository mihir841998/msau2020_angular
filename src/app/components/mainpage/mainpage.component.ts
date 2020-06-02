import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import {HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private _router: Router,private toastr: ToastrService,) { }

  ngOnInit(): void 
  {
    // this.header.display_hello_logout()
    if(sessionStorage.getItem('first_time_to_main_page')=='true')
    {
      // this.header.display_hello_logout(true)
      console.log('in onint of mainpage '+ sessionStorage.getItem('name'))
      this.toastr.success('', 'Welcome '+ sessionStorage.getItem('name'),{
        timeOut: 5000
      });
      sessionStorage.setItem('first_time_to_main_page','false')
    }
    
  }

  viewUsers()
  {
    this._router.navigate(['allusers'])
  }

  viewTrends()
  {
    this._router.navigate(['trends'])
  }

  go_back()
  {
    this._router.navigate(['mainpage'])
  }

}
