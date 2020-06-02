import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ViewallusersComponent } from './components/viewallusers/viewallusers.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendsComponent } from './components/trends/trends.component';
import { TrendskillComponent } from './components/trendskill/trendskill.component';
import { TrendhmidComponent } from './components/trendhmid/trendhmid.component';
import { TrendlocationComponent } from './components/trendlocation/trendlocation.component';
import { TrenddemandidComponent } from './components/trenddemandid/trenddemandid.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1004937025943-on8uitv66b1v1aia5ttnp06udpfc00t9.apps.googleusercontent.com")
  }  
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    ViewallusersComponent,
    UserdetailsComponent,
    TrendsComponent,
    TrendskillComponent,
    TrendhmidComponent,
    TrendlocationComponent,
    TrenddemandidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    SocialLoginModule.initialize(config),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
