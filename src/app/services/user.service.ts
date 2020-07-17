import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  rootApi = "https://laravel-app-api.herokuapp.com/public/api/";

  constructor(private http: HttpClient) { }

  userRegister(user: User): Observable<any>{
    const headers = { 'content-type': 'multipart/form-data'};
    const body = JSON.stringify(user);
    console.log(user);
    return this.http.post(this.rootApi + 'register', body);
  }

  userDetail(): Observable<any>{
    return this.http.get(this.rootApi + 'detail');
  }

  userLogin(user:User){
    const headers = { 'content-type': 'multipart/form-data'};
    const body = JSON.stringify(user);
    return this.http.post(this.rootApi + 'login', body, {'headers': headers});
  }

}
