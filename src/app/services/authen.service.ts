import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../model/user.module";
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  private apiRoot = 'https://laravel-app-api.herokuapp.com/public/api/';
  private token = 'Bearer ' + JSON.parse(localStorage.getItem('data'))['success']['token'];
  constructor(private http: HttpClient) { }

  register(user:User): Observable<any>{
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(user);

    console.log(user, body);
    return this.http.post(this.apiRoot + 'register', body, {'headers': headers});
  }

  login(email: string, password: string){
    return this.http.post(this.apiRoot + 'login',
    {
      'email': email,
      'password': password
    });
  }

  detail(){
    return this.http.post(this.apiRoot + 'detail',
      '',
      {
        'headers': {
          'Authorization': this.token
        }
      });
  }

  logout(){
    return this.http.post(this.apiRoot + 'logout',
      '',
      { 'headers':
        {
          'Authorization': this.token
        }
      });
  }


}
