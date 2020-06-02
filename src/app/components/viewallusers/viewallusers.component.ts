import { Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../service/user.service'
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewallusers',
  templateUrl: './viewallusers.component.html',
  styleUrls: ['./viewallusers.component.css']
})
export class ViewallusersComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['userid','name','phone','email','demandid','hmid','skill','location','start_date','eta','bgc_status','onboarding_status'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  access_level:any
  constructor(private userService: UserService,private route:Router,private toastr: ToastrService) { }

  ngOnInit(): void 
  {
    
    console.log('in onint of viewallusers access' + this.userService.user_access)
    this.access_level=sessionStorage.getItem('access')
    if(this.access_level=='1')
    {
      this.displayedColumns.push('actions')
    }
    // this.access_level = (this.userService.user_access==1) ? true : false
    this.get_table_data()
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    get_table_data()
    {
      this.userService.get_all_onbordees().subscribe(
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
    edit_onbordee(onbordee)
    {
      console.log('edit')
      console.log(onbordee)
      this.userService.onbordee=onbordee
      this.userService.request='put'
      this.route.navigate(['userdetails'])
    }

    delete_onbordee(onbordee)
    {
      if(confirm("Are you sure  you want to delete the Onbordee "+name)) 
      {
        console.log("Implement delete functionality here");
        console.log(onbordee.userid)
        this.userService.delete_onbordee(onbordee.userid).subscribe((res)=>{
            console.log(res)
            this.get_table_data()
        })  
        
        this.toastr.success('Onbordee with UserID '+ onbordee.userid +' has been deleted successfully', 'Deleted Successfully',{
          timeOut: 3000
        });     
      }
    }
    add_new_onbordee()
    {
        console.log('add')
        this.userService.request='post'
        this.route.navigate(['userdetails'])

    }

    back_to_main_page()
    {
      console.log('back to main page')
      this.route.navigate(['mainpage'])
    }
}
