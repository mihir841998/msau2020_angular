import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallusersComponent } from './viewallusers.component';
import { RouterTestingModule } from '@angular/router/testing'
import {UserService} from '../../service/user.service'
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

describe('ViewallusersComponent', () => {
  let component: ViewallusersComponent;
  let fixture: ComponentFixture<ViewallusersComponent>;
  let httpTestingController: HttpTestingController;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[UserService,{ provide: ToastrService, useValue: toastrService }],
      declarations: [ ViewallusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  // it('test get table data ', () => 
  // {
  //   const mockData = [{
  //     name: 'Mihir',
  //     surname: 'Maniar'
  //   }];

  //   component.get_table_data()
  //   expect(component.dataSource.data).toEqual(mockData);

  //   const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/onbordees/null');

  //   expect(req.request.method).toEqual('GET');

  //   req.flush(mockData);

    
    
  // });
});
