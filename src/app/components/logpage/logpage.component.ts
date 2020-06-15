import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../../service/user.service'
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-logpage',
  templateUrl: './logpage.component.html',
  styleUrls: ['./logpage.component.css']
})
export class LogpageComponent implements OnInit {

  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];
// "datetime.dayOfMonth+' '+datetime.month+ ' '+ datetime.year+' '+datetime.hour+':'+datetime.minute+':'+datetime.second'"
columnDefs1 = [
  {headerName: 'Datetime', field: 'datetime', sortable: true, filter: true, resizable: true },
  {headerName: 'Operation', field: 'operation', sortable: true, filter: true, resizable: true,width:800 }
];

rowData2:any

rowData1 = [
  {
  datetime: {
      "dayOfMonth": 10,
      "dayOfWeek": "WEDNESDAY",
      "month": "JUNE",
      "year": 2020,
      "dayOfYear": 162,
      "monthValue": 6,
      "hour": 12,
      "minute": 39,
      "nano": 0,
      "second": 38,
      "chronology": {
          "id": "ISO",
          "calendarType": "iso8601"
      }
    },
      operation: "UserID 5323 updated Onbordee with ID 1009 [changed location from Bangalore to Bangaloreeeee]"
  }  
]



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
        this.rowData1 = res;
        this.create_row_aggrid()
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

  create_row_aggrid()
  {
  //   var person = { 
  //     datetime:"Tom", 
  //     operation:"Hanks" 
  //  };
   this.rowData2=[]
   for (var i in this.rowData1) {
    let person ={datetime:'',operation:''}
    console.log(this.rowData1[i]);
    person.datetime = this.rowData1[i].datetime.dayOfMonth + ' ' + this.rowData1[i].datetime.month+ ' '+this.rowData1[i]. datetime.year+' '+this.rowData1[i].datetime.hour+':'+this.rowData1[i].datetime.minute+':'+this.rowData1[i].datetime.second;
    person.operation=this.rowData1[i].operation
    this.rowData2.push(person)    
  }
  console.log(this.rowData2)
}
  

}
