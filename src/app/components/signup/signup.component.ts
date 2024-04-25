import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock, faMailBulk, faU, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router) { }
  fauser = faUser
  famail = faMailBulk;
  falock = faLock;
  
  signup=new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
  })

  signinbtn() {
    this.router.navigateByUrl('/login');
  }

  onSubmit() {
    console.log(this.signup.value);
    this.router.navigate(['./login'])
  }
}
