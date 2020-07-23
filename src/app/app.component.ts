import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nguon-api';
  
  isLogin(): boolean{
    return localStorage.getItem('data')? true : false;
  }

  getLocalStorage(){
    return localStorage.getItem('data');
  }

}
