import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenddemandidComponent } from './trenddemandid.component';
import {UserService} from '../../service/user.service'
import { of } from 'rxjs/internal/observable/of';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
  import { RouterTestingModule } from '@angular/router/testing'

describe('TrenddemandidComponent', () => {
  let component: TrenddemandidComponent;
  let fixture: ComponentFixture<TrenddemandidComponent>;
  let spy:any
  let service:any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ TrenddemandidComponent ],
      providers:[UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrenddemandidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService)
    
  });

  it('check whether components fields are updated from the data coming fron the backend', () => {
    const mockData = [{
      clientname: 'Morgan Stanley',
      count: '1'
    }];
    spy = spyOn(service, 'get_trenddemandid').and.returnValue(of(mockData));
    component.ngOnInit()
    expect(component.loadCompleted).toEqual(true); 
    expect(component.data).toEqual(['1']); 
    expect(component.label).toEqual(['Morgan Stanley']); 
    expect(service.get_trenddemandid).toHaveBeenCalled()
  });
});
