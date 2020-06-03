import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-trendhmid',
  templateUrl: './trendhmid.component.html',
  styleUrls: ['./trendhmid.component.css']
})
export class TrendhmidComponent implements OnInit {
  data=[]
  label=[]
  loadCompleted:boolean = false;

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void
   {
    console.log("trendhmid"); 
    this.userService.get_trendhmid().subscribe((res)=>
  {
     
    for (var index1 in res) {
      console.log(res[index1]);
      this.data.push(res[index1].count)
      this.label.push(res[index1].hiring_manager_name)
      
    }
    console.log(this.data)
console.log(this.label)
this.loadCompleted=true
  })
  }
  back()
  {
    this.router.navigate(['trends'])
    
  }

  public chartType_bar: string = 'bar';
  public chartType_polar: string = 'polarArea';
  public chartType_pie: string = 'pie';
  public chartType_doughnut: string = 'doughnut';
  
  public chartDatasets: Array<any> = [
    { data: this.data, label: 'My First dataset' }
  ];
  public chartLabels: Array<any> = this.label
  public chartColors_polar: Array<any> = [
    {
      backgroundColor: [
        'rgba(219, 0, 0, 0.1)',
        'rgba(0, 165, 2, 0.1)',
        'rgba(255, 195, 15, 0.2)',
        'rgba(55, 59, 66, 0.1)',
        'rgba(0, 0, 0, 0.3)'
      ],
      hoverBackgroundColor: [
        'rgba(219, 0, 0, 0.2)',
        'rgba(0, 165, 2, 0.2)',
        'rgba(255, 195, 15, 0.3)',
        'rgba(55, 59, 66, 0.1)',
        'rgba(0, 0, 0, 0.4)'
      ],
      borderWidth: 2,
    }
  ];
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];
  public chartColors_pie: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
  public chartColors_doughnut: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
