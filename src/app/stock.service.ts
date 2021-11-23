import { Injectable } from '@angular/core';
import { Stock } from './stock';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  
  export class StockService {httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })}; 

  constructor(private http: HttpClient) { }

/** GET Stocks from the server */
getStocks(): Observable<Stock[]> {   
  return this.http.get<Stock[]>('http://localhost:3000/api/symbols/');
      //return  this.http.get<Stock[]>('mongodb+srv://testUser:test@stockscluster.nee1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  }

  /** GET Stocks by id.  */
getStock(id: number): Observable<Stock> { 
  //return this.http.get<Stock>('http://localhost:3000/stocks/' + id);
  return this.http.get<Stock>('mongodb+srv://testUser:test@stockscluster.nee1p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' + id);
}

}
