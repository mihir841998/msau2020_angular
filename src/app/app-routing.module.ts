import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginPageComponent} from './components/login-page/login-page.component'

// import {MainpageComponent} from './components/mainpage/mainpage.component'
import {ViewallusersComponent} from './components/viewallusers/viewallusers.component'
import {UserdetailsComponent} from './components/userdetails/userdetails.component'
import {TrendsComponent} from './components/trends/trends.component'
import {TrendskillComponent} from './components/trendskill/trendskill.component'
import {TrendlocationComponent} from './components/trendlocation/trendlocation.component'
import {TrenddemandidComponent} from './components/trenddemandid/trenddemandid.component'
import {TrendhmidComponent} from './components/trendhmid/trendhmid.component'
import {LoginguardService} from'./service/loginguard.service'
import {LogpageComponent} from './components/logpage/logpage.component'
import {UsermanagementComponent} from './components/usermanagement/usermanagement.component'
import {HiringmanagerComponent} from './components/hiringmanager/hiringmanager.component'

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  // { path: 'mainpage', component: MainpageComponent,canActivate:[LoginguardService]  },
  { path: 'allusers', component: ViewallusersComponent,canActivate:[LoginguardService]  },
  { path: 'userdetails', component: UserdetailsComponent,canActivate:[LoginguardService]  },
  { path: 'trends', component:TrendsComponent,canActivate:[LoginguardService] },
  { path: 'trendskill', component:TrendskillComponent,canActivate:[LoginguardService] },
  { path: 'trendlocation', component:TrendlocationComponent,canActivate:[LoginguardService] },
  { path: 'trendhmid', component:TrendhmidComponent,canActivate:[LoginguardService] },
  { path: 'trenddemandid', component:TrenddemandidComponent,canActivate:[LoginguardService] },
  { path: 'logpage', component:LogpageComponent,canActivate:[LoginguardService] },
  { path: 'usermanagement', component:UsermanagementComponent,canActivate:[LoginguardService] },
  { path: 'hiringmanager', component:HiringmanagerComponent,canActivate:[LoginguardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
