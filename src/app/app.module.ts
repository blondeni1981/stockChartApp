import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StockChartModule, TooltipService, ChartModule, CrosshairService, CandleSeriesService, LineSeriesService, SmaIndicatorService, DateTimeService} from '@syncfusion/ej2-angular-charts';



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
import { CandlestickComponent } from './candlestick/candlestick.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent,
    GoogleSigninComponent,
    SignInComponent,
    CandlestickComponent,
    LandingPageComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockChartModule,
    ChartModule,
   

    MatButtonModule,
    BrowserAnimationsModule,

    HttpClientModule

  ],
  providers: [ DateTimeService, CandleSeriesService, TooltipService,  LineSeriesService, SmaIndicatorService, CrosshairService],
  bootstrap: [AppComponent]
})
export class AppModule { }
