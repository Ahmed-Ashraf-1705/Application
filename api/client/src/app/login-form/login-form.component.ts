import { Component, OnInit } from '@angular/core';
import { UserLoginModel } from '../user';
import { HttpClientServiceService } from '../http-client-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  userLoginData: UserLoginModel;
  constructor(private httpc: HttpClientServiceService) {
    
  }
  onSubmit(value:UserLoginModel){
    //SharedDataServiceService.prototype.setUserLoginData(this.userLoginData);
    this.httpc.login(value);
  }

  ngOnInit() {
  }

}
