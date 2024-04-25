import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/signup',
    pathMatch:'full',
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin',
    canActivate:[authGuard],
    loadChildren:()=> import('./modules/admin/admin.module').then((m)=>m.AdminModule)
  },
  {
    path:'**',
    component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
