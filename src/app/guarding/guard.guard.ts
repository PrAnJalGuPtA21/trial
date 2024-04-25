import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state)=> {

  const auth : AuthService = inject (AuthService);
 const router : Router = inject (Router)
  if (!auth.isLoggedIn()) {
    router.navigate(['/login']);
  }
  return auth.isLoggedIn();
};
