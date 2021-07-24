import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { HeadquarterComponent } from './component/headquarter/headquarter.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [

  {
    path: "",
    component: HeadquarterComponent  // replace this with home component
  },
  {
    path:"admin",
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path:"**",
    component: PageNotFoundComponent  // replace this with other component
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
