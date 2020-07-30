import { Component, OnInit, Input } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input('checked') isChecked: boolean;
  fmGroup: FormGroup;
  constructor(private authen: AuthenService,
              private route: Router,
              private snaker: MatSnackBar) {
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
      if(this.getToken()){
        this.snaker.open('Once User has logged in','OK',{duration: 2000});
      }else{
        localStorage.setItem('data',JSON.stringify(data));
        this.route.navigate(['/']);
        this.snaker.open('Logged in successfully!','OK',{duration: 2000});
      }
    });
  }

  private setIsChecked(email: string, password: string){
    if(this.isChecked){
      let user = JSON.stringify([email,password])
      sessionStorage.setItem('user',user);
      console.log(sessionStorage.getItem('user'));
    }
  }

}
