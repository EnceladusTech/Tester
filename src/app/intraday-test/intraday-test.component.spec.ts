import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntradayTestComponent } from './intraday-test.component';

describe('IntradayTestComponent', () => {
  let component: IntradayTestComponent;
  let fixture: ComponentFixture<IntradayTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntradayTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntradayTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
