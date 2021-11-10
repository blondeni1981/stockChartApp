import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StockChartModule} from '@syncfusion/ej2-angular-charts';
import {DateTimeService, CandleSeriesService} from '@syncfusion/ej2-angular-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { StockchartComponent } from './stockchart/stockchart.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent}  from './login/login.component';  // had to edit this
import { GoogleSigninComponent }  from './google.signin';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    PostListComponent,
    PostCreateComponent,
    StockchartComponent,
    LoginComponent,
    LogoutComponent,
    GoogleSigninComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockChartModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [DateTimeService, CandleSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
