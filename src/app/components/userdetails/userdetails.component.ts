import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit 
{

  user:any
  constructor(private userService: UserService) { }

  ngOnInit(): void 
  {
    console.log("in userdetails"+this.userService.onbordee_detail)
    this.user=this.userService.onbordee_detail    
  }

  save(data)
  {
    this.userService.update_onbordee(data.userid,data)
  }

}
