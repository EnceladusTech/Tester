import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
declare var moment: any;
@Component({
  selector: 'trade-viewer-intraday-test',
  templateUrl: './intraday-test.component.html',
  styleUrls: ['./intraday-test.component.scss']
})
export class IntradayTestComponent implements OnInit {
  public trades: any[];
  public moment = moment;
  public Math = Math;
  public symbol = '';
  public i30m = [];
  public i15m = [];
  public i10m = [];
  public i5m = [];
  public i1m = [];

  constructor(private _mainService: MainService) { }


  ngOnInit() {
    const tempTrades = [];
    this._mainService.getTestData()
      .subscribe(k => {

        for (const reportId in k) {
          if (k.hasOwnProperty(reportId)) {
            const symbolData = k[reportId];
            for (const sym in symbolData) {
              if (symbolData.hasOwnProperty(sym)) {
                this.symbol = sym;
                this.i30m = symbolData[sym].i30m;
                this.i15m = symbolData[sym].i15m;
                this.i10m = symbolData[sym].i10m;
                this.i5m = symbolData[sym].i5m;
                this.i1m = symbolData[sym].i1m;
                break;
              }
            }
            break;
          }
        }

        console.log(k);
      }, err => {
        console.error(err);
      });
  }
}
