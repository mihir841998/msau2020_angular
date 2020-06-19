import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementComponent, EditUser,AddUser } from './usermanagement.component';
import { RouterTestingModule } from '@angular/router/testing'
import {UserService} from '../../service/user.service'
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs/internal/observable/of';
import { MatDialogModule,MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { EditHm } from '../hiringmanager/hiringmanager.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';



describe('UsermanagementComponent', () => {
  let component: UsermanagementComponent;
  let editcomponent:EditUser
  let addcomponent:AddUser
  let fixture: ComponentFixture<UsermanagementComponent>;
  let fixture_edit: ComponentFixture<EditUser>;
  let fixture_add: ComponentFixture<AddUser>;
  let httpTestingController: HttpTestingController;
  const toastrService = {
    success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
    error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
  };
  let spy:any
  let service:any
  let dialog: MatDialog;
  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule,MatDialogModule,BrowserModule,FormsModule,ReactiveFormsModule],
      providers:[UserService,{ provide: ToastrService, useValue: toastrService },
        ],
      declarations: [ UsermanagementComponent,EditUser,AddUser ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementComponent);    
    component = fixture.componentInstance;
    fixture_edit = TestBed.createComponent(EditUser); 
    editcomponent=fixture_edit.componentInstance
    fixture_add = TestBed.createComponent(AddUser); 
    addcomponent=fixture_add.componentInstance
    fixture.detectChanges();
    service = TestBed.inject(UserService)
    dialog = TestBed.inject(MatDialog);
  });

  it('test get table data for user from backend ', () => 
  {
    const mockData = 'Updated Successfully'
    spy = spyOn(service, 'get_all_users').and.returnValue(of(mockData));
    component.get_table_data()
    expect(component.dataSource.data).toEqual(mockData);    
    
    
  });

  // it('test edit_onbordee', () => 
  // {
  //   const mockData = {
  //     name: 'Mihir',
  //     surname: 'Maniar'
  //   };
  //   dialogSpy = spyOn(dialog, 'open').and.returnValue(dialogRefSpyObj);
  //   expect(dialogSpy).toHaveBeenCalled();   
  // });

  it('test  delete_user data', () => 
  {
    const mockData = 'Deleted Successfully';
    const data = {
      name: 'Mihir',
      surname: 'Maniar'
    };
    spy = spyOn(service, 'delete_user').and.returnValue(of(mockData));
    var spy_coomponent = spyOn(component, "get_table_data").and.callThrough();
    component.delete_user(data)
    expect(service.delete_user).toHaveBeenCalled();
    expect(component.get_table_data).toHaveBeenCalled();       
  });

  it('test edit user method', () => {
    const mockData = 'Updated Successfully';
    spy = spyOn(service, 'update_user').and.returnValue(of(mockData));
    const data={name:'mihir'}
    editcomponent.onSave(data)
    expect(service.update_user).toHaveBeenCalled();    
  });

  it('test add user method', () => {
    const mockData1 = 'Added Successfully';
    spy = spyOn(service, 'save_user').and.returnValue(of(mockData1));
    const data1={name:'mihir'}
    addcomponent.onSave(data1)
    expect(service.save_user).toHaveBeenCalled();    
  });


});
