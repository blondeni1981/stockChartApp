import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AuthenticationComponent } from './authentication/authentication.component';



import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CandlestickComponent } from './candlestick/candlestick.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [

  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent }, 
   { path: 'candlestick', component: CandlestickComponent }
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
