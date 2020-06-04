import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../service/user.service'
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logpage',
  templateUrl: './logpage.component.html',
  styleUrls: ['./logpage.component.css']
})
export class LogpageComponent implements OnInit {

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['datetime','operation'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private userService: UserService,private route:Router) { }

  ngOnInit(): void
  {
    this.userService.get_log_by_id().subscribe(
      (res)=>{
        console.log(res)
        this.dataSource.data = res;
      }
    );
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    console.log('mihir',event)
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  } 
  

}
