import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendlocationComponent } from './trendlocation.component';
import {UserService} from '../../service/user.service'
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
  import { RouterTestingModule } from '@angular/router/testing'

describe('TrendlocationComponent', () => {
  let component: TrendlocationComponent;
  let fixture: ComponentFixture<TrendlocationComponent>;
  let spy:any
  let service:any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ TrendlocationComponent ],
      providers:[UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService)
    
  });

  it('check whether components fields are updated from the data coming fron the backend', () => {
    const mockData = [{
      location: 'Mumbai',
      count: '1'
    }];
    spy = spyOn(service, 'get_trendlocation').and.returnValue(of(mockData));
    component.ngOnInit()
    expect(component.loadCompleted).toEqual(true); 
    expect(component.data).toEqual(['1']); 
    expect(component.label).toEqual(['Mumbai']); 
    expect(service.get_trendlocation).toHaveBeenCalled()
    
  });
});
