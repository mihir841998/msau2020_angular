import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogpageComponent } from './logpage.component';
import { RouterTestingModule } from '@angular/router/testing'
import {UserService} from '../../service/user.service'
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';

describe('LogpageComponent', () => {
  let component: LogpageComponent;
  let fixture: ComponentFixture<LogpageComponent>;
  let spy:any
  let service:any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      declarations: [ LogpageComponent ],
      providers:[UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService)
  });

  it('check whether datasource.data gets updated with the data coming from the backend', () => {
    const mockData = [{
      datetime: '31 August 2020',
      operation: 'Added successfully'
    }];
    spy = spyOn(service, 'get_log_by_id').and.returnValue(of(mockData));
    component.ngOnInit()
    expect(component.dataSource.data).toEqual(mockData);  
  });
});
