import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StockChartModule} from '@syncfusion/ej2-angular-charts';
import {DateTimeService, CandleSeriesService} from '@syncfusion/ej2-angular-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { StockchartComponent } from './stockchart/stockchart.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    StockchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StockChartModule,
    HttpClientModule
  ],
  providers: [DateTimeService, CandleSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
