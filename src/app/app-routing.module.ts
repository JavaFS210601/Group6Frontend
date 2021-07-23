import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path:"**",
    component: AdminComponent  // replace this with other component
  },
  {
    path:"admin",
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path:"",
    component: AdminComponent  // replace this with home component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
