import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewallusersComponent } from './viewallusers.component';
import { RouterTestingModule } from '@angular/router/testing'
import {UserService} from '../../service/user.service'
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';


describe('ViewallusersComponent', () => {
  let component: ViewallusersComponent;
  let fixture: ComponentFixture<ViewallusersComponent>;
  let httpTestingController: HttpTestingController;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };
  let spy:any
  let service:any

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
    //httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(UserService)
  });
  // afterEach(() => {
  //   httpTestingController.verify();
  // });

   it('test get table data ', () => 
  {
    const mockData = [{
      name: 'Mihir',
      surname: 'Maniar'
    }];
    spy = spyOn(service, 'get_all_onbordees').and.returnValue(of(mockData));
    component.get_table_data()
    expect(component.dataSource.data).toEqual(mockData);    
    
  });

  it('test edit_onbordee', () => 
  {
    const mockData = {
      name: 'Mihir',
      surname: 'Maniar'
    };
    component.edit_onbordee(mockData)
    expect(service.onbordee).toEqual(mockData); 
    expect(service.request).toEqual('put')       
  });

  it('test  delete_onbordee data', () => 
  {
    const mockData = 'Deleted Successfully';
    const data = {
      name: 'Mihir',
      surname: 'Maniar'
    };
    spy = spyOn(service, 'delete_onbordee').and.returnValue(of(mockData));
    var spy_coomponent = spyOn(component, "get_table_data").and.callThrough();
    component.delete_onbordee(data)
    expect(service.delete_onbordee).toHaveBeenCalled();
    expect(component.get_table_data).toHaveBeenCalled();       
  });
  it('test add_new_onbordee', () => 
  {
    
    component.add_new_onbordee()    
    expect(service.request).toEqual('post')       
  });


  
});
