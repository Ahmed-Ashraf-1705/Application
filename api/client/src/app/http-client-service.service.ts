import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLoginModel, UserRegisterModel } from './user';
import { SharedDataServiceService } from './shared-data-service.service';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient, private userData: SharedDataServiceService,private router: Router) {
  }

  // login user
  login(data:UserLoginModel){
    let result = this.http.post("/login",data);
    if(result){
      // redirect to user page and save data in the service
      this.userData.setUserLoginData({"email":data.email,"password":data.password});
      this.router.navigate(['/todolist']);
    }
    return result;
  }

  // register new user
  register(data:UserRegisterModel){
    let result = this.http.post("/register",{"name":data.name,"email":data.email,"password":data.password});
    if(result){
      console.log(result)
      this.userData.setUserRegisterData(data);
      this.router.navigate(['/']);
    }
    return result
  }


}
