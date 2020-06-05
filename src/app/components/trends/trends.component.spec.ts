import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsComponent } from './trends.component';
import { RouterTestingModule } from '@angular/router/testing'
import { Router} from '@angular/router'

describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;
  let router:any
  let spy: any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [ TrendsComponent ],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router)
  });

  it('navigate to trend_skill', () => {
    spy = spyOn(router, 'navigate')
    component.trend_skill();
    expect(router.navigate).toHaveBeenCalled()
    
  });

  it('navigate to trend_location', () => {
    spy = spyOn(router, 'navigate')
    component.trend_location();
    expect(router.navigate).toHaveBeenCalled()    
  });

  it('navigate to trend_demandid', () => {
    spy = spyOn(router, 'navigate')
    component.trend_demandid();
    expect(router.navigate).toHaveBeenCalled()    
  });

  it('navigate to trend_hmid', () => {
    spy = spyOn(router, 'navigate')
    component.trend_hmid();
    expect(router.navigate).toHaveBeenCalled()    
  });

  it('navigate to trend_hmid', () => {
    spy = spyOn(router, 'navigate')
    component.trend_hmid();
    expect(router.navigate).toHaveBeenCalled()    
  });

  it('navigate go_back', () => {
    spy = spyOn(router, 'navigate')
    component.go_back();
    expect(router.navigate).toHaveBeenCalled()    
  });
});
