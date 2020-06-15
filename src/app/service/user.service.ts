import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../components/header/header.component'


@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  base_url = "http://localhost:8080/MSAU2020/api";
  user_access = 1;
  onbordee={
    userid:'',
    demandid:'',
    hmid:'',
    skill:'',
    location:'',
    start_date:'',
    eta:'',
    bgc_status:'',
    onboarding_status:'',
    name:'',
    phone:'',
    email:'',
  }
  request=''
  path=''
  logged_in=false
  username=''
  body
  demand
  hm


  constructor(private _http: HttpClient,) 
  { 
    

  }

  
  check_user_credentials(data:object):Observable<any>
  {
    console.log(data)
    return this._http.post(this.base_url + "/check",data)
    
  }
  get_all_onbordees():Observable<any>
  {
    console.log('get_all_onbordees')
    console.log(sessionStorage.getItem('id'))
    return this._http.get("http://localhost:8080/MSAU2020/api/onbordees/"+sessionStorage.getItem('id'));
  }

  get_all_users():Observable<any>
  {
    console.log('in user service get all user')
    return this._http.get("http://localhost:8080/MSAU2020/api/getuser");
  }

  get_all_hm():Observable<any>
  {
    console.log('in user service get all hm')
    return this._http.get("http://localhost:8080/MSAU2020/api/gethm");
  }

  get_user_by_id():Observable<any>
  {
    console.log('in user service get user by id')
    return this._http.get("http://localhost:8080/MSAU2020/api/userget/"+sessionStorage.getItem('id'));
  }
  delete_onbordee(id)
  {
    console.log('delete_onbordee'+id)
    return this._http.delete("http://localhost:8080/MSAU2020/api/onbordee/"+id+"/"+sessionStorage.getItem('id'),{responseType: 'text'});
  }

  delete_user(id)
  {
    console.log('user service delete user '+sessionStorage.getItem('id'))
    return this._http.delete("http://localhost:8080/MSAU2020/api/userdelete/"+id+"/"+sessionStorage.getItem('id'),{responseType: 'text'});
  }

  delete_hm(id)
  {
    console.log('user service delete hm '+sessionStorage.getItem('id'))
    return this._http.delete("http://localhost:8080/MSAU2020/api/hmdelete/"+id+"/"+sessionStorage.getItem('id'),{responseType: 'text'});
  }
  update_onbordee(id,onbordee)
  {
    console.log('update_onbordee '+id)
    console.log(onbordee)
    return this._http.put(this.base_url + "/onbordee/" + id+"/"+sessionStorage.getItem('id'),onbordee,{responseType: 'text'});
  }
  update_user(id,user)
  {
    console.log('in user service update_user '+ sessionStorage.getItem('id'))
    console.log(user)
    return this._http.put(this.base_url + "/userupdate/" + id+"/"+sessionStorage.getItem('id'),user,{responseType: 'text'});
  }

  update_hm(id,user)
  {
    console.log('in user service update_hm '+ sessionStorage.getItem('id'))
    console.log(user)
    return this._http.put(this.base_url + "/hmupdate/" + id+"/"+sessionStorage.getItem('id'),user,{responseType: 'text'});
  }
  save_onbordee(onbordee)
  {
    console.log('save onbordee')
    console.log(onbordee)
    return this._http.post(this.base_url+'/onbordee/'+sessionStorage.getItem('id'),onbordee,{responseType: 'text'})
  }

  save_user(user)
  {
    console.log('in userservice save user')
    console.log(user)
    return this._http.post(this.base_url+'/usersave/'+sessionStorage.getItem('id'),user,{responseType: 'text'})
  }
  save_hm(user)
  {
    console.log('in userservice save hm')
    console.log(user)
    return this._http.post(this.base_url+'/hmsave/'+sessionStorage.getItem('id'),user,{responseType: 'text'})
  }

  get_trenddemandid()
  {
    console.log('get trend')
    return this._http.get(this.base_url+'/trenddemandid')
  }
  get_trendskill()
  {
    console.log('get trend')
    return this._http.get(this.base_url+'/trendskill')
  }
  get_trendlocation()
  {
    console.log('get trend')
    return this._http.get(this.base_url+'/trendlocation')
  }
  get_trendhmid()
  {
    console.log('get trend')
    return this._http.get(this.base_url+'/trendhmid')
  }
  get_access_by_email(email)
  {
    console.log('in get_access_by_email ' + email)
    return this._http.post(this.base_url+'/getaccess',{'email':email})
  }
  get_log_by_id():Observable<any>
  {
    return this._http.get(this.base_url+'/log/'+sessionStorage.getItem('id'))
  }  
  
  get_demand():Observable<any>
  {
    return this._http.get(this.base_url+'/demand')
  }

  get_hm():Observable<any>
  {
    return this._http.get(this.base_url+'/hm')
  }

}
