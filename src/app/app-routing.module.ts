import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeListPageComponent } from './trade-list/trade-list-page/trade-list-page.component';
import { IntradayTestComponent } from './intraday-test/intraday-test.component';

const routes: Routes = [
  {
    path: 'trade-list',
    component: TradeListPageComponent
  },
  {
    path: 'intraday-test',
    component: IntradayTestComponent
  },
  {
    path: '**',
    component: TradeListPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
