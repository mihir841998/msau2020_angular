import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendskillComponent } from './trendskill.component';

describe('TrendskillComponent', () => {
  let component: TrendskillComponent;
  let fixture: ComponentFixture<TrendskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
