import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:AdminDashboardComponent,
    children:[
      {
        path:'about',
        component:AboutComponent,
      },
      {
        path:'features',
        component:FeaturesComponent,
      },
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path:'',
        redirectTo:'/admin/home',
        pathMatch:'full',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
