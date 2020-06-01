import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginPageComponent} from './components/login-page/login-page.component'

import {MainpageComponent} from './components/mainpage/mainpage.component'
import {ViewallusersComponent} from './components/viewallusers/viewallusers.component'
import {UserdetailsComponent} from './components/userdetails/userdetails.component'
import {TrendsComponent} from './components/trends/trends.component'
import {TrendskillComponent} from './components/trendskill/trendskill.component'
import {TrendlocationComponent} from './components/trendlocation/trendlocation.component'
import {TrenddemandidComponent} from './components/trenddemandid/trenddemandid.component'
import {TrendhmidComponent} from './components/trendhmid/trendhmid.component'

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'allusers', component: ViewallusersComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'trends', component:TrendsComponent},
  { path: 'trendskill', component:TrendskillComponent},
  { path: 'trendlocation', component:TrendlocationComponent},
  { path: 'trendhmid', component:TrendhmidComponent},
  { path: 'trenddemandid', component:TrenddemandidComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
