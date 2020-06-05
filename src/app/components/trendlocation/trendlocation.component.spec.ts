import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendlocationComponent } from './trendlocation.component';

describe('TrendlocationComponent', () => {
  let component: TrendlocationComponent;
  let fixture: ComponentFixture<TrendlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
