import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
declare var moment: any;
@Component({
  selector: 'trade-viewer-trade-list-page',
  templateUrl: './trade-list-page.component.html',
  styleUrls: ['./trade-list-page.component.scss']
})
export class TradeListPageComponent implements OnInit {

  public trades: any[];
  public moment = moment;
  public Math = Math;
  constructor(private _mainService: MainService) { }

  ngOnInit() {
    const tempTrades = [];
    this._mainService.getTrades()
      .subscribe(k => {

        for (const key in k) {
          if (k.hasOwnProperty(key)) {
            console.log(k[key]);
            tempTrades.push(k[key]);
          }
        }

        this.trades = tempTrades.sort((a, b) => {
          if (a.breakOutTime > b.breakOutTime) {
            return -1;
          } else if (a.breakOutTime < b.breakOutTime) {
            return 1;
          } else {
            return 0;
          }
        });
      }, err => {
        console.error(err);
      });
  }

}
