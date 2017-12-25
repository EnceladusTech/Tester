import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class MainService {

  constructor(
    private _http: Http
  ) { }

  public getTrades() {
    return this._http.get('https://joejordan-abcd.firebaseio.com/open.json')
      .map(resp => {
        return resp.json();
      }, err => console.error(err));
  }
  public getTestData() {
    return this._http.get('https://joejordan-abcd.firebaseio.com/data-test/intraday.json')
      .map(resp => {
        return resp.json();
      }, err => console.error(err));
  }
  public getALSingleData() {
    return this._http.get('https://joejordan-abcd.firebaseio.com/al-single/open.json')
      .map(resp => {
        return resp.json();
      }, err => console.error(err));
  }
}

