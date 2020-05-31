import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginPageComponent} from './components/login-page/login-page.component'

import {MainpageComponent} from './components/mainpage/mainpage.component'
import {ViewallusersComponent} from './components/viewallusers/viewallusers.component'
import {UserdetailsComponent} from './components/userdetails/userdetails.component'
import {TrendsComponent} from './components/trends/trends.component'


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'allusers', component: ViewallusersComponent },
  { path: 'userdetails', component: UserdetailsComponent },
  { path: 'trends', component:TrendsComponent, },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
