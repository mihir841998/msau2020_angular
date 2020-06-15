import { Component, OnInit,ViewChild } from '@angular/core';
import {UserService} from '../../service/user.service'
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';

let hm={
  hmid:'',
  name:'',
  email:'',
  phone:'',
}

@Component({
  selector: 'app-hiringmanager',
  templateUrl: './hiringmanager.component.html',
  styleUrls: ['./hiringmanager.component.css']
})
export class HiringmanagerComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['hmid','name','email','phone'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  access_level:any

  constructor(private userService: UserService,private route:Router,private toastr: ToastrService,public dialog: MatDialog) { }

  ngOnInit(): void 
  {
    console.log('in oninit of hiringmanager')
    this.access_level=sessionStorage.getItem('access')
    if(sessionStorage.getItem('access')=='1')
    {
      this.displayedColumns.push('actions')
    }
    this.get_table_data()
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }

  get_table_data()
    {
      console.log('in get table data of usermanagement')
      this.userService.get_all_hm().subscribe(
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

    delete_hm(user)
    {
      if(confirm("Are you sure  you want to delete the Hiring Manager "+user.name)) 
      {
        console.log("Implement delete functionality here");
        console.log(user.id)
        this.userService.delete_hm(user.hmid).subscribe((res)=>{
            console.log(res)
            this.get_table_data()
        })  
        
        this.toastr.success('Hiring Manager with ID '+ user.id +' has been deleted successfully', 'Deleted Successfully',{
          timeOut: 3000
        });     
      }
    } 
    addhm() {
      console.log('in hiringmanager add hm function')
      const dialogRef = this.dialog.open(AddHm);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.get_table_data()
      });
      
    }

    edithm(hm1) {
      console.log('in hiringmanager edit user function')
      hm=hm1      
      const dialogRef = this.dialog.open(EditHm);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.get_table_data()
      });
      
    }
  }

  @Component({
    selector: 'addhm',
    templateUrl: 'addhm.html',
  })
  export class AddHm implements OnInit {
    hmdetails={
      hmid:'',
      name:'',
      email:'',
      phone:''
    }
    constructor(private userService:UserService,private toastr: ToastrService){}
    ngOnInit(): void {
      console.log('in add hm')
      
        console.log('method post in onit addhm')
        
        this.hmdetails={
          hmid:'',
          name:'',
          email:'',
          phone:''
        }
      }
      onSave(data)
      {
        console.log('post')
          this.userService.save_hm(data).subscribe(res=>console.log(res))
          this.toastr.success('Hiring manager with ID '+ data.id +' has been added successfully', 'Added Successfully',{
            timeOut: 3000
          })
      }
      
    
  }


  @Component({
    selector: 'edithm',
    templateUrl: 'edithm.html',
  })
  export class EditHm implements OnInit{
    hmdetails:any
    constructor(private userService:UserService,private toastr: ToastrService){}
    ngOnInit(): void {
      console.log('in EditHm')
  
        console.log('method put in onit edituser')
        this.hmdetails=hm     
      
    }
    onSave(data)
    {
      console.log(data)
        
               console.log('put')
            this.userService.update_hm(data.hmid,data).subscribe(res=>console.log(res))
            this.toastr.success('Hiring manager with ID '+ data.id +' has been updated successfully', 'Updated Successfully',{
              timeOut: 3000
            })

  
  
    }
  
    
  }
