import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeListPageComponent } from './trade-list-page.component';

describe('TradeListPageComponent', () => {
  let component: TradeListPageComponent;
  let fixture: ComponentFixture<TradeListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
