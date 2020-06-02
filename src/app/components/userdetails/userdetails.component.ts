import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit 
{

  user={
    userid:'',
    demandid:'',
    hmid:'',
    skill:'',
    location:'',
    start_date:'',
    eta:'',
    bgc_status:'',
    onboarding_status:'',
    name:'',
    phone:'',
    email:'',
  }
  constructor(private userService: UserService,private route:Router,private toastr: ToastrService) { }

  ngOnInit(): void 
  {
    console.log("in userdetails")
    console.log(this.userService.onbordee)
    this.user=this.userService.onbordee
    this.userService.onbordee={
      userid:'',
      demandid:'',
      hmid:'',
      skill:'',
      location:'',
      start_date:'',
      eta:'',
      bgc_status:'',
      onboarding_status:'',
      name:'',
      phone:'',
      email:'',
    }

  }

  

  onSave(data)
  {
      console.log(data)
      if(this.userService.request=='put')
      {
        console.log('put')
          this.userService.update_onbordee(data.userid,data).subscribe(res=>console.log(res))
          this.toastr.success('Onbordee with UserID '+ data.userid +' has been updated successfully', 'Updated Successfully',{
            timeOut: 3000
          })
      }
      else
      {
        this.toastr.success('Onbordee with UserID '+ data.userid +' has been added successfully', 'Added Successfully',{
          timeOut: 3000
        })
        console.log('post')
        this.userService.save_onbordee(data).subscribe(res=>console.log(res))
      }
  }

  back()
  {    
    this.route.navigate(['allusers'])
  }

}
