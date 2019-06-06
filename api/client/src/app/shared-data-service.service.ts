import { Injectable } from '@angular/core';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class SharedDataServiceService {
  private userData ; // after login
  private userLoginData; // loginform data
  private userRegisterData; // registration form data

  constructor() { }
  setUserRegisterData(data){
    this.userRegisterData = data;
  }
  setUserLoginData(data){
    this.userLoginData = data;
  }
  setAccountInfo(data){
    this.userData = data;
  }
  getLoginData(){
    return this.userLoginData;
  }
  getRegisterData(){
    return this.userRegisterData;
  }
  getAccountInfo(){
    return this.userData;
  }
  clearData(){
    this.userData = null;
  }

}
