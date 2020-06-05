import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendskillComponent } from './trendskill.component';
import {UserService} from '../../service/user.service'
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
  import { RouterTestingModule } from '@angular/router/testing'

describe('TrendskillComponent', () => {
  let component: TrendskillComponent;
  let fixture: ComponentFixture<TrendskillComponent>;
  let spy:any
  let service:any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ TrendskillComponent ],
      providers:[UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService)
    
  });

  it('check whether components fields are updated from the data coming fron the backend', () => {
    const mockData = [{
      skill: 'Java',
      count: '1'
    }];
    spy = spyOn(service, 'get_trendskill').and.returnValue(of(mockData));
    component.ngOnInit()
    expect(component.loadCompleted).toEqual(true); 
    expect(component.data).toEqual(['1']); 
    expect(component.label).toEqual(['Java']); 
    expect(service.get_trendskill).toHaveBeenCalled()
    
    
    
  });
});
