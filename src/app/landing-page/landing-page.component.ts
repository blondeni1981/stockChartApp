import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
  
export class LandingPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(){
    this.getStocks();
    console.log(this.stocks);
  }
  
  getStocks(): void {
    this.stockService.getStocks()
      .subscribe(stocks => this.stocks = stocks)
      console.log(this.stocks);
  }
}
