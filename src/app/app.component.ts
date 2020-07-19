import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nguon-api';

  isLogin(){
    return localStorage.getItem('data')? true : false;
  }
}
