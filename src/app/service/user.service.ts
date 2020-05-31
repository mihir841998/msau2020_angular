import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  base_url = "http://localhost:8080/MSAU2020/api";
  user_access = 1;
  onbordee_detail:any
  constructor(private _http: HttpClient) { }

  check_user_credentials(data:object):Observable<any>
  {
    console.log(data)
    return this._http.post(this.base_url + "/check",data)
  }
  get_all_onbordees():Observable<any>
  {
    console.log('get_all_onbordees')
    return this._http.get(this.base_url + "/onbordee");
  }
  delete_onbordee(id)
  {

    console.log('delete_onbordee'+id)
    return this._http.delete("http://localhost:8080/MSAU2020/api/onbordee/"+id,{responseType: 'text'});
  }
  update_onbordee(id,onbordee)
  {
    console.log('update_onbordee'+id)
    return this._http.put(this.base_url + "/onbordee/" + id,onbordee);
  }
  
}
