import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router:Router){}
  authen:AuthService = inject(AuthService);
  onLogout() {
    this.authen.logout();  
  }
  
}
