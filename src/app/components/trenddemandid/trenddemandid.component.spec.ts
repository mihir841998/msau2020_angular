import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenddemandidComponent } from './trenddemandid.component';

describe('TrenddemandidComponent', () => {
  let component: TrenddemandidComponent;
  let fixture: ComponentFixture<TrenddemandidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrenddemandidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenddemandidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
