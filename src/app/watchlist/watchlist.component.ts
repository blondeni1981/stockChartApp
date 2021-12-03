import { Component, OnInit, Input } from '@angular/core';
import { Symbol } from '../Symbol';
import { APIChartService } from '../services/apichart.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent  {

  constructor( private apiservice: APIChartService) { }

 
  symbols: Symbol[] = [];
  private symbolSub: Subscription;

  

  ngOnInit() {
    this.apiservice.getSymbol();
    this.symbolSub = this.apiservice.getSymbolUpdateListener()
      .subscribe((symbols: Symbol[]) => {
        this.symbols = symbols;
      });
  }

  onDelete(symbolId: string) {
    this.apiservice.deleteSymbol(symbolId);
  }

  ngOnDestroy() {
    this.symbolSub.unsubscribe();
  }
}
