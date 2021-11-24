import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
  
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
