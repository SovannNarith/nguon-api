import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   user:User;
   u_register = new User();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register(){
    this.userService.userRegister(this.u_register).subscribe( data => {
      // this.user = data;
      console.log(this.user, data);
    });
  }

  detail(){
    this.userService.userDetail().subscribe( data => { 
    })
  }

  login(){
    this.userService.userLogin(this.u_register).subscribe( data => {
      console.log(data);
    });
  }


}
