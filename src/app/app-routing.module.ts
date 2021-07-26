import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { HeadquarterComponent } from './component/headquarter/headquarter.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AdminGuard } from './guard/admin.guard';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { FaqComponent } from './component/faq/faq.component';


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
    path:'about',
    component: AboutComponent  // replace this with about component
  },
  {
    path:'faq',
    component: FaqComponent  // replace this with frequently asked questions component
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
