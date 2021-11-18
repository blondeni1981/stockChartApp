import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent}  from './login/login.component';  // had to edit this
import { GoogleSigninComponent }  from './google.signin';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { APIChartComponent } from './apichart/apichart.component';
import { ChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent,
    GoogleSigninComponent,
    SignInComponent,
    LandingPageComponent,
    APIChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule, 
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
