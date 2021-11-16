import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean = false;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
   
    });

    if( sessionStorage.getItem('ID:') == undefined ) {
      this.loggedIn = false
    }
    // else if( sessionStorage.getItem('ID:').length < 5 ){
    //   this.loggedIn = false;
    //   console.log( sessionStorage.getItem('ID:') );
    //   console.log(this.loggedIn);
    // }
    else {
      this.loggedIn = true;
    }
    console.log(this.loggedIn);
  }

}
