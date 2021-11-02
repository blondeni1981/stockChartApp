import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockchart',
  templateUrl: './stockchart.component.html',
  styleUrls: ['./stockchart.component.css']
})
export class StockchartComponent implements OnInit {


  constructor() { }

  public chartData: Object = [];
  public primaryXAxis!: Object;
  public tooltip!: Object;
  

  ngOnInit(): void {
    this.tooltip = {enable: true}
    this.chartData =  [{
 
      "x": new Date('2012-04-02T00:00:00.000Z'),

      "open": 320.705719,

      "high": 324.074066,

      "low": 317.737732,

      "close": 323.783783,

      "volume": 45638000

  }, {

      "x": new Date('2012-04-03T00:00:00.000Z'),

      "open": 323.028015,

      "high": 324.299286,

      "low": 319.639648,

      "close": 321.631622,

      "volume": 40857000

  }, {

      "x": new Date('2012-04-04T00:00:00.000Z'),

      "open": 319.544556,

      "high": 319.819824,

      "low": 315.865875,

      "close": 317.892883,

      "volume": 32519000

          }, {

      "x": new Date('2012-04-05T00:00:00.000Z'),

      "open": 316.436432,

      "high": 318.533539,

      "low": 314.599609,

      "close": 316.476471,

      "volume": 46327000

  }]

this.primaryXAxis = { valueType: 'DateTime' };

}

}
