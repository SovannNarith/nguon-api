import { Component } from '@angular/core';
import { AuthenService } from './services/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nguon-api';
  constructor(private authen: AuthenService, private route: Router){ }
  isLogin(): boolean{
    return localStorage.getItem('data')? true : false;
  }

  logOut(){
    this.authen.logout().subscribe( data => {
      console.log(data);
    });
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
