import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.module';
import { AuthenService } from 'src/app/services/authen.service';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    { provide: MatFormFieldControl, useExisting: RegisterComponent}
  ]
})
export class RegisterComponent implements OnInit {

  currentUser: User;
  user = new User();

  constructor(private authen: AuthenService) {}

  ngOnInit(): void {
  }

  onRegister(){
    this.authen.register(this.user).subscribe( data => {
      this.currentUser = data;
      console.log(this.currentUser, data);
    });
  }

}
