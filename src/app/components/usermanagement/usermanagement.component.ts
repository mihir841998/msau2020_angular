import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../service/user.service'
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';

let user={
  id:'',
  name:'',
  email:'',
  access:'',
}
let method=''

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id','name','email','access','actions'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  access_level:any

  constructor(private userService: UserService,private route:Router,private toastr: ToastrService,public dialog: MatDialog) { }

  ngOnInit(): void 
  {
    console.log('in oninit of usermanagement')
    this.get_table_data()
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  get_table_data()
    {
      console.log('in get table data of usermanagement')
      this.userService.get_all_users().subscribe(
        (res)=>{
          console.log(res)
          this.dataSource.data = res;
        }
      );

    }

    applyFilter(event: Event) {
      console.log('mihir',event)
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      
    }

   
    edituser(user1) {
      console.log('in usermanagement edit user function')
      user=user1
      method='put'
      const dialogRef = this.dialog.open(EditUser);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.get_table_data()
      });
      
    }

    delete_user(user)
    {
      if(confirm("Are you sure  you want to delete the User "+name)) 
      {
        console.log("Implement delete functionality here");
        console.log(user.id)
        this.userService.delete_user(user.id).subscribe((res)=>{
            console.log(res)
            this.get_table_data()
        })  
        
        this.toastr.success('User with UserID '+ user.id +' has been deleted successfully', 'Deleted Successfully',{
          timeOut: 3000
        });     
      }
    }
    
    
    adduser() {
      console.log('in usermanagement add user function')
      method='post'
      const dialogRef = this.dialog.open(AddUser);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.get_table_data()
      });
      
    }
  
    

}
@Component({
  selector: 'adduser',
  templateUrl: 'adduser.html',
})
export class AddUser implements OnInit {
  userdetails={
    id:'',
    name:'',
    access:'',
    email:'',
    password:''
  }
  constructor(private userService:UserService,private toastr: ToastrService){}
  ngOnInit(): void {
    console.log('in add User')
    
      console.log('method post in onit adduser')
      
      this.userdetails={
        id:'',
        name:'',
        access:'',
        email:'',
        password:''
      }
    }
    onSave(data)
    {
      console.log('post')
        this.userService.save_user(data).subscribe(res=>console.log(res))
        this.toastr.success('User with UserID '+ data.id +' has been added successfully', 'Added Successfully',{
          timeOut: 3000
        })
    }
    
  
}

@Component({
  selector: 'edituser',
  templateUrl: 'edituser.html',
})
export class EditUser implements OnInit{
  userdetails:any
  // is_post=false
  constructor(private userService:UserService,private toastr: ToastrService){}
  ngOnInit(): void {
    console.log('in EditUser')

      console.log('method put in onit edituser')
      this.userdetails=user    
   
    
  }
  onSave(data)
  {
    console.log(data)
      
             console.log('put')
          this.userService.update_user(data.id,data).subscribe(res=>console.log(res))
          this.toastr.success('User with UserID '+ data.id +' has been updated successfully', 'Updated Successfully',{
            timeOut: 3000
          })
          
      
      // else
      // {
      //   this.toastr.success('Onbordee with UserID '+ data.id +' has been added successfully', 'Added Successfully',{
      //     timeOut: 3000
      //   })
      //   console.log('post')
      //   this.userService.save_user(data).subscribe(res=>console.log(res))
      // }


  }

  
}
