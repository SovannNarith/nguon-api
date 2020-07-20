import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fmGroup: FormGroup;
  constructor(private authen: AuthenService) {
    this.fmGroup = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    });
   }

  ngOnInit(): void {
  }

  canActivate(){
    return localStorage.getItem('data')? true : false;
  }

  onSubmit(email: string, password: string){
    this.authen.login(email.toString(),password.toString()).subscribe( data => {
      localStorage.setItem('data',JSON.stringify(data));
      console.log(data);
    });
  }
  
  userLogout(){
    this.authen.logout().subscribe( data => {
      console.log(data);
    });
    localStorage.removeItem('data');
  }

}
