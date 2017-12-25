import { Component, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
declare var moment: any;
@Component({
  selector: 'trade-viewer-trade-list-single-page',
  templateUrl: './trade-list-single-page.component.html',
  styleUrls: ['./trade-list-single-page.component.scss']
})
export class TradeListSinglePageComponent implements OnInit {

  public trades: any[];
  public moment = moment;
  public Math = Math;
  constructor(private _mainService: MainService) { }

  ngOnInit() {
    const tempTrades = [];
    this._mainService.getALSingleData()
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
