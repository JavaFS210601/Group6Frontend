import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
  {
    path:"admin",
    component: AdminComponent
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
