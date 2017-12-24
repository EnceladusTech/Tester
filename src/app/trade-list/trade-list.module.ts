import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeListPageComponent } from './trade-list-page/trade-list-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [TradeListPageComponent]
})
export class TradeListModule { }
