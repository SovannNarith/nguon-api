import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../model/user.module";

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  private apiRoot = 'https://laravel-app-api.herokuapp.com/public/api/';

  constructor(private http: HttpClient) { }
   
  register(user:User): Observable<any>{
    return this.http.post(this.apiRoot + 'register', user);
  }

  login(email: string, password: string){
    return this.http.post(this.apiRoot + 'login',
    {
      'email': email,
      'password': password
    });
  }

  logout(){
    return this.http.post(this.apiRoot + 'logout', null, {'headers': this.getToken()});
  }

  detail(){
    return this.http.post(this.apiRoot + 'detail', null,{'headers': this.getToken()});
  }

  private getToken(){
    return {'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('data'))['success']['token']};
  }

}
