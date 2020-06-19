import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringmanagerComponent,EditHm,AddHm } from './hiringmanager.component';
import { RouterTestingModule } from '@angular/router/testing'
import {UserService} from '../../service/user.service'
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';
import { MatDialogModule,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { EditUser } from '../usermanagement/usermanagement.component';

describe('HiringmanagerComponent', () => {
  let component: HiringmanagerComponent;
  let fixture: ComponentFixture<HiringmanagerComponent>;
  let fixture_edit: ComponentFixture<EditHm>;
  let editcomponent:EditHm
  let addcomponent:AddHm
  let fixture_add: ComponentFixture<AddHm>;
  let httpTestingController: HttpTestingController;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };
  let spy:any
  let service:any
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule,MatDialogModule,BrowserModule,FormsModule,ReactiveFormsModule],
      providers:[UserService,{ provide: ToastrService, useValue: toastrService },
        ],
      declarations: [ HiringmanagerComponent,EditHm,AddHm ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringmanagerComponent);
    component = fixture.componentInstance;
    fixture_edit = TestBed.createComponent(EditHm); 
    editcomponent=fixture_edit.componentInstance
    fixture_add = TestBed.createComponent(AddHm); 
    addcomponent=fixture_add.componentInstance
    fixture.detectChanges();
    service = TestBed.inject(UserService)
    dialog = TestBed.inject(MatDialog);
  });

  it('test get table data for user from backend ', () => 
  {
    const mockData = 'Updated Successfully'
    spy = spyOn(service, 'get_all_hm').and.returnValue(of(mockData));
    component.get_table_data()
    expect(component.dataSource.data).toEqual(mockData);        
    
  });

  it('test  delete_hm data', () => 
  {
    const mockData = 'Deleted Successfully';
    const data = {
      name: 'Mihir',
      surname: 'Maniar'
    };
    spy = spyOn(service, 'delete_hm').and.returnValue(of(mockData));
    var spy_coomponent = spyOn(component, "get_table_data").and.callThrough();
    component.delete_hm(data)
    expect(service.delete_hm).toHaveBeenCalled();
    expect(component.get_table_data).toHaveBeenCalled();       
  });


  it('test edit hm method', () => {
    const mockData = 'Updated Successfully';
    spy = spyOn(service, 'update_hm').and.returnValue(of(mockData));
    const data={name:'mihir'}
    editcomponent.onSave(data)
    expect(service.update_hm).toHaveBeenCalled();    
  });

  it('test add hm method', () => {
    const mockData1 = 'Added Successfully';
    spy = spyOn(service, 'save_hm').and.returnValue(of(mockData1));
    const data1={name:'mihir'}
    addcomponent.onSave(data1)
    expect(service.save_hm).toHaveBeenCalled();    
  });

});
