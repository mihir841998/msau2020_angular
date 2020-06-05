import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendhmidComponent } from './trendhmid.component';
import {UserService} from '../../service/user.service'
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
  import { RouterTestingModule } from '@angular/router/testing'

describe('TrendhmidComponent', () => {
  let component: TrendhmidComponent;
  let fixture: ComponentFixture<TrendhmidComponent>;
  let spy:any
  let service:any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ TrendhmidComponent ],
      providers:[UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendhmidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService)
    
  });

  it('check whether components fields are updated from the data coming fron the backend', () => {
    const mockData = [{
      hiring_manager_name: 'Mit Shah',
      count: '1'
    }];
    spy = spyOn(service, 'get_trendhmid').and.returnValue(of(mockData));
    component.ngOnInit()
    expect(component.loadCompleted).toEqual(true); 
    expect(component.data).toEqual(['1']); 
    expect(component.label).toEqual(['Mit Shah']); 
    expect(service.get_trendhmid).toHaveBeenCalled()
  });
});
