import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendhmidComponent } from './trendhmid.component';

describe('TrendhmidComponent', () => {
  let component: TrendhmidComponent;
  let fixture: ComponentFixture<TrendhmidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendhmidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendhmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
