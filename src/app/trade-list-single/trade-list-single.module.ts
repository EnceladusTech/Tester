import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TradeListSinglePageComponent } from './trade-list-single-page/trade-list-single-page.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [TradeListSinglePageComponent]
})
export class TradeListSingleModule { }
