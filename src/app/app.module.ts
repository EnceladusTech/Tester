import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TradeListModule } from './trade-list/trade-list.module';
import { MainService } from './main.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import { IntradayTestComponent } from './intraday-test/intraday-test.component';
import { TradeListSingleModule } from './trade-list-single/trade-list-single.module';
@NgModule({
  declarations: [
    AppComponent,
    IntradayTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TradeListModule,
    TradeListSingleModule,
    HttpModule,
    FlexLayoutModule,
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
