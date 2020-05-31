import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  viewUsers()
  {
    this._router.navigate(['allusers'])
  }

  viewTrends()
  {
    this._router.navigate(['trends'])
  }

}
