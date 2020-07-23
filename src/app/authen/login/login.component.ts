import { Component, OnInit, Input } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input('checked') isChecked: boolean;
  fmGroup: FormGroup;
  constructor(private authen: AuthenService, private route: Router) {
    this.fmGroup = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  getToken(){
    return localStorage.getItem('data')? true : false;
  }

  onSubmit(email: string, password: string){
    this.authen.login(email.toString(),password.toString())
    .subscribe( data => {
      localStorage.setItem('data',JSON.stringify(data));
      console.log(localStorage.getItem('data'));
      this.route.navigate(['/']);
      this.setIsChecked(email,password);
    });
  }

  setIsChecked(email: string, password: string){
    if(this.isChecked){
      let user = JSON.stringify([email,password])
      sessionStorage.setItem('user',user);
      console.log(sessionStorage.getItem('user'));
    }
  }

}
