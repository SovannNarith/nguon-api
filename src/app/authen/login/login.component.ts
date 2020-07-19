import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { User } from 'src/app/model/user.module';
import { FormGroup, FormControl } from '@angular/forms';
import { CanActivate } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, CanActivate {

  fmGroup: FormGroup;

  user = new User();
  constructor(private authen: AuthenService) {
    this.fmGroup = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    });
   }

  ngOnInit(): void {
  }

  canActivate(){
    if(localStorage.getItem('data'))
      return true;
    else 
      return false;
  }

  onSubmit(email: string, password: string){
    this.authen.login(email.toString(),password.toString()).subscribe( data => {
      localStorage.setItem('data', JSON.stringify(data));
      console.log(data);
      console.log(localStorage.getItem('data'));
    });
  }

}
