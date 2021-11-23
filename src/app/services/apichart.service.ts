import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Symbol } from '../Symbol';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class APIChartService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 // [x: string]: any;
  public symbols: Symbol[] = [];
  public symbolUpdated = new Subject<Symbol[]>();





  urlBeg = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='
  urlEnd = '&apikey=/&apikey=STJWVFPJ06LAI0N7'
  //go to www.alphavantage.co to get your free api key
  dailyBeg = 'https://www.alphavantage.co/query?outputsize=full&function=TIME_SERIES_DAILY&symbol='
 
  //ticker: any;
  //symbols: any;
 // symbolsUpdated: any;
  constructor(private http: HttpClient) { }

  search(symbol:string): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlBeg}${symbol}${this.urlEnd}`)
  }

  daily(symbol:string): Observable<any[]>{
    return this.http.get<any[]>(`${this.dailyBeg}${symbol}${this.urlEnd}`)
  }

  getSymbol() {
    this.http
      .get<{  symbol: any }>(
        "http://localhost:3000/api/symbols"
      )
      .pipe(map((postData) => {
        return postData.symbol.map(post => {
          return {
            symbols: post.symbol,

            id: post._id
          };
        });
      }))
      .subscribe(transformedSymbols => {
        this.symbols = transformedSymbols;
        this.symbolUpdated.next([...this.symbols]);
      });
  }

  getSymbolUpdateListener() {
    return this.symbolUpdated.asObservable();
  }

  addSymbol(symbol: string) {
    const ticker: Symbol = { id: null, symbol: symbol };
    this.http
      .post<{ message: string, symbolId: string }>("http://localhost:3000/api/symbols", ticker)
      .subscribe(responseData => {
        const id = responseData.symbolId;
        ticker.id = id;
        this.symbols.push(ticker);
        this.symbolUpdated.next([...this.symbols]);
      });
    }

      deleteSymbol(symbolId: string) {
        this.http.delete("http://localhost:3000/api/symbols/" + symbolId)
          .subscribe(() => {
            const updatedSymbols = this.symbols.filter(symbol => symbol.id !== symbolId);
            this.symbols = updatedSymbols;
            this.symbolUpdated.next([...this.symbols]);
          });
      }
  }
