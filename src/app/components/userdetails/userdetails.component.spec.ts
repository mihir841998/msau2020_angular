import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsComponent } from './userdetails.component';
import { RouterTestingModule } from '@angular/router/testing'
import {UserService} from '../../service/user.service'
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
  import { FormsModule }   from '@angular/forms';
import { of } from 'rxjs/internal/observable/of';

describe('UserdetailsComponent', () => {
  let component: UserdetailsComponent;
  let fixture: ComponentFixture<UserdetailsComponent>;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };
  let spy:any
  let service:any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule,FormsModule],
      providers:[UserService,{ provide: ToastrService, useValue: toastrService }],
      declarations: [ UserdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(UserService)
  });

  it('test save method', () => {
    const mockData = 'Updated Successfully';
    service.request='put'
    spy = spyOn(service, 'update_onbordee').and.returnValue(of(mockData));
    const data={name:'mihir'}
    component.onSave(data)
    expect(service.update_onbordee).toHaveBeenCalled();
    const mockData1 = 'Added Successfully';
    service.request='post'
    spy = spyOn(service, 'save_onbordee').and.returnValue(of(mockData1));
    const data1={name:'mihir'}
    component.onSave(data1)
    expect(service.save_onbordee).toHaveBeenCalled();
  });
});
