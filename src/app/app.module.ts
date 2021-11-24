import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignInComponent}  from './login/login.component';  // had to edit this
import { GoogleSigninComponent }  from './google.signin';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
//import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';


import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { APIChartComponent } from './apichart/apichart.component';
import { ChartsModule } from 'ng2-charts';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { APIChartService } from './services/apichart.service';
import { NewAPIComponent } from './new-api/new-api.component';
import { StockWatchComponent } from './stock-watch/stock-watch.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    LogoutComponent,
    GoogleSigninComponent,
    SignInComponent,
    LandingPageComponent,
    APIChartComponent,
    WatchlistComponent,
    NewAPIComponent,
    StockWatchComponent,
  ],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    FormsModule,
    MatChipsModule,
    MatSnackBarModule, 
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule, 
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule

  ],
  providers: [APIChartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
