import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {

  fmGroup: FormGroup;
  constructor(private authen: AuthenService, private route: Router) {
    this.fmGroup = new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(null,[Validators.required]),
      'c_password': new FormControl(null,[Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data){
    this.authen.register(data).subscribe( res => {
      console.log('registered',res);
      this.route.navigate(['login']);
    });
  }

}
