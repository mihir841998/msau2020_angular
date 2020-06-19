import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('test for get all onbordees', () => {
    const mockData = {
      name: 'Mihir',
      surname: 'Maniar'
    };
    service.get_all_onbordees().subscribe(data=>
      {
        expect(data.name).toEqual('Mihir');
        expect(data.surname).toEqual('Maniar');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/onbordees/null');

      expect(req.request.method).toEqual('GET');

      req.flush(mockData);

  });

  it('test for get all users', () => {
    const mockData = {
      name: 'Mihir',
      surname: 'Maniar'
    };
    service.get_all_users().subscribe(data=>
      {
        expect(data.name).toEqual('Mihir');
        expect(data.surname).toEqual('Maniar');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/getuser');

      expect(req.request.method).toEqual('GET');

      req.flush(mockData);

  });

  it('test for get all hiring manager', () => {
    const mockData = {
      name: 'Mihir',
      surname: 'Maniar'
    };
    service.get_all_hm().subscribe(data=>
      {
        expect(data.name).toEqual('Mihir');
        expect(data.surname).toEqual('Maniar');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/gethm');

      expect(req.request.method).toEqual('GET');

      req.flush(mockData);

  });

  it('test for check_user_credentials', () => {
    const mockData = {
      result: 'success',
      access: '1'
    };
    const test_data={
      name:'mihir',
      password:'mihir'
    };
    service.check_user_credentials(test_data).subscribe(data=>
      {
        expect(data.result).toEqual('success');
        expect(data.access).toEqual('1');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/check');

      expect(req.request.method).toEqual('POST');

      req.flush(mockData);

  });

  it('test for delete onbordee', () => {
    const text = "Deleted Successfully" 
    const id=1
    service.delete_onbordee(id).subscribe(data=>
      {
        expect(data).toEqual('Deleted Successfully');        
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/onbordee/1/null');

      expect(req.request.method).toEqual('DELETE');

      req.flush(text);

  });

  it('test for delete user', () => {
    const text = "Deleted Successfully" 
    const id=1
    service.delete_user(id).subscribe(data=>
      {
        expect(data).toEqual('Deleted Successfully');        
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/userdelete/1/null');

      expect(req.request.method).toEqual('DELETE');

      req.flush(text);

  });

  it('test for delete hm', () => {
    const text = "Deleted Successfully" 
    const id=1
    service.delete_hm(id).subscribe(data=>
      {
        expect(data).toEqual('Deleted Successfully');        
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/hmdelete/1/null');

      expect(req.request.method).toEqual('DELETE');

      req.flush(text);

  });

  it('test for update onbordee', () => {
    const text = "Updated Successfully" 
    const id=1
    const data={
      name:'mihir',
      surname:'maniar'
    }
    service.update_onbordee(id,data).subscribe(data=>
      {
        expect(data).toEqual('Updated Successfully');        
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/onbordee/1/null');

      expect(req.request.method).toEqual('PUT');

      req.flush(text);

  });

  it('test for update user', () => {
    const text = "Updated Successfully" 
    const id=1
    const data={
      name:'mihir',
      surname:'maniar'
    }
    service.update_user(id,data).subscribe(data=>
      {
        expect(data).toEqual('Updated Successfully');        
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/userupdate/1/null');

      expect(req.request.method).toEqual('PUT');

      req.flush(text);

  });

  it('test for update hm', () => {
    const text = "Updated Successfully" 
    const id=1
    const data={
      name:'mihir',
      surname:'maniar'
    }
    service.update_hm(id,data).subscribe(data=>
      {
        expect(data).toEqual('Updated Successfully');        
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/hmupdate/1/null');

      expect(req.request.method).toEqual('PUT');

      req.flush(text);

  });


  it('test for save onbordee', () => {
    const text = "Saved Successfully" 
    const data={
      name:'mihir',
      surname:'maniar'
    }
    service.save_onbordee(data).subscribe(data=>
      {
        expect(data).toEqual('Saved Successfully');        
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/onbordee/null');

      expect(req.request.method).toEqual('POST');

      req.flush(text);
  });

  it('test for save user', () => {
    const text = "Saved Successfully" 
    const data={
      name:'mihir',
      surname:'maniar'
    }
    service.save_user(data).subscribe(data=>
      {
        expect(data).toEqual('Saved Successfully');        
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/usersave/null');

      expect(req.request.method).toEqual('POST');

      req.flush(text);
  });

  it('test for save hm', () => {
    const text = "Saved Successfully" 
    const data={
      name:'mihir',
      surname:'maniar'
    }
    service.save_hm(data).subscribe(data=>
      {
        expect(data).toEqual('Saved Successfully');        
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/hmsave/null');

      expect(req.request.method).toEqual('POST');

      req.flush(text);
  });

  it('test for get trend for demandid', () => {
    const mockData = {
      clientname: 'Morgan Stanley',
      count: '1'
    };
    
    service.get_trenddemandid().subscribe((data:{clientname:string,count:string})=>
      {
        expect(data.clientname).toEqual('Morgan Stanley');
        expect(data.count).toEqual('1');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/trenddemandid');

      expect(req.request.method).toEqual('GET');
      req.flush(mockData);
  });

  it('test for get trend for skill', () => {
    const mockData = {
      skill: 'Java',
      count: '1'
    };
    
    service.get_trendskill().subscribe((data:{skill:string,count:string})=>
      {
        expect(data.skill).toEqual('Java');
        expect(data.count).toEqual('1');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/trendskill');

      expect(req.request.method).toEqual('GET');
      req.flush(mockData);
  });

  it('test for get trend for location', () => {
    const mockData = {
      location: 'Mumbai',
      count: '1'
    };
    
    service.get_trendlocation().subscribe((data:{location:string,count:string})=>
      {
        expect(data.location).toEqual('Mumbai');
        expect(data.count).toEqual('1');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/trendlocation');

      expect(req.request.method).toEqual('GET');
      req.flush(mockData);
  });

  it('test for get trend for hiring manager ID', () => {
    const mockData = {
      name: 'Mit Shah',
      count: '1'
    };
    
    service.get_trendhmid().subscribe((data:{name:string,count:string})=>
      {
        expect(data.name).toEqual('Mit Shah');
        expect(data.count).toEqual('1');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/trendhmid');

      expect(req.request.method).toEqual('GET');
      req.flush(mockData);
  });

  it('test for get access by email', () => {
    const mockData = {
      result: 'Success',
      access: '1'
    };
    const email='mihir@gmail.com'
    
    service.get_access_by_email(email).subscribe((data:{result:string,access:string})=>
      {
        expect(data.result).toEqual('Success');
        expect(data.access).toEqual('1');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/getaccess');

      expect(req.request.method).toEqual('POST');
      req.flush(mockData);
  });

  it('test for get log by id', () => {
    const mockData = {
      datetime: '5 August 2020',
      operation: 'Deleted User'
    };
    
    
    service.get_log_by_id().subscribe((data:{datetime:string,operation:string})=>
      {
        expect(data.datetime).toEqual('5 August 2020');
        expect(data.operation).toEqual('Deleted User');
      })
      const req = httpTestingController.expectOne('http://localhost:8080/MSAU2020/api/log/null');

      expect(req.request.method).toEqual('GET');
      req.flush(mockData);
  });
});
