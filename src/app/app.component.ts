import { Component } from '@angular/core';
import { AuthenService } from './services/authen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nguon-api';
  constructor(private authen: AuthenService){ }
  isLogin(): boolean{
    return localStorage.getItem('data')? true : false;
  }

  logOut(){
    this.authen.logout().subscribe( data => {
      console.log(data);
    });
    localStorage.clear();
  }

  // profile(){
  //   this.authen.detail().subscribe( data => {
  //     console.log(data);
  //   });
  // }


}
