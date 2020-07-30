import { Component } from '@angular/core';
import { AuthenService } from './services/authen.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nguon-api';
  constructor(private authen: AuthenService,
              private route: Router,
              private snakbar: MatSnackBar){}
  isLogin(): boolean{
    return localStorage.getItem('data')? true : false;
  }

  logOut(){
    if(localStorage.getItem('data')){
      this.authen.logout().subscribe( data => {
        localStorage.clear();
        this.route.navigate(['/login']);
        this.snakbar.open('Logged out!','OK',{duration: 2000});
      });
    }else{
      this.snakbar.open('Unauthorized for Logout!','OK',{duration: 2000});
    }
  }

}
