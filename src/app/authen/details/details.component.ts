import { Component, OnInit } from '@angular/core';
import { AuthenService } from 'src/app/services/authen.service';
import { rejects } from 'assert';
import { User } from 'src/app/model/user.module';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private user = new User();
  public currentUser= {'success': this.user};
  
  constructor(private authen: AuthenService) {
    this.profile(); 
  }

  ngOnInit(): void {}

  profile(){
    this.authen.detail()
      .toPromise()
      .then(
        res => {
          this.currentUser = res;
          console.log(this.currentUser);
        },
        msg => {
          rejects(msg);
        }
      );
  }

}
