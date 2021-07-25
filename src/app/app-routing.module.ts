import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { AdminGuard } from './guard/admin.guard';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  
  {
    path:"admin",
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path:'home',
    component: HomeComponent  // replace this with home component
  },
  {
    path:"**",
    component: AdminComponent  // replace this with other component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
