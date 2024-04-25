import { Component, OnInit, inject } from '@angular/core';
import { faLock, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  authen: AuthService = inject(AuthService)
  famail = faMailBulk
  falock = faLock;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
    if (this.authen.isLoggedIn) {
      this.router.navigate(['admin'])
    }
  }

  signupbtn() {
    this.router.navigateByUrl('/');
  }

  onLogin() {
    if (this.loginForm.valid) {
      let data = this.loginForm.value.password;
      const encdata = CryptoJS.AES.encrypt(JSON.stringify(data), 'data_key').toString();
      console.log("encrypt pass ", encdata);
      this.authen.login(this.loginForm.value, encdata).subscribe((res) => {
        alert("Login Successful")
        this.router.navigate(['admin']);
      }, (err: Error) => {
        alert(err.message)
      })
      let decdata = CryptoJS.AES.decrypt(encdata, 'data_key').toString(CryptoJS.enc.Utf8);
      console.log('Decrypted Pass', decdata);
    }
    // console.log(this.loginForm.value);
  }
}
