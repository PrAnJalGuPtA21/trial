import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router :Router) { }
  setToken(token:string ):void{
    sessionStorage.setItem('password' , token);
  }

  getToken(){
    return sessionStorage.getItem('password');
  }
  isLoggedIn(){
    return this.getToken()!== null;
  }

  logout(){
    sessionStorage.removeItem('password');
    this.router.navigate(['./login'])
  }

  login({email,password}:any,encdata){
    if(email === 'test@gmail.com' && password === 'test'){
      this.setToken(encdata);
      return of({name:'test' , email:'test@gmail.com'});
    }
    else{
      return throwError(new Error('failed to login'));
    }
  }
}
