import { Component, OnInit } from '@angular/core';
import { UserRegisterModel } from '../user';
import { HttpClientServiceService } from '../http-client-service.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  userRegisterData:UserRegisterModel;
  constructor(private httpc:HttpClientServiceService) { }

  ngOnInit() {
  }
  onSubmit(value:UserRegisterModel){
    this.httpc.register(value);
  }

}
