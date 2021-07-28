import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { HeadquarterComponent } from './component/headquarter/headquarter.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { AdminGuard } from './guard/admin.guard';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { FaqComponent } from './component/faq/faq.component';
import { UploadComponent } from './component/upload/upload.component';
import { RecipecardComponent } from './component/recipecard/recipecard.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';

import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DashboardRecipeComponent } from './component/dashboard-recipe/dashboard-recipe.component';



const routes: Routes = [

  {
    path: "",
    redirectTo: '/home', pathMatch: 'full'  // replace this with home component
  },
  {
    path:"admin",
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  {
    path:"dashboard",
    component: DashboardComponent,
    canActivate: [AdminGuard]
  },
  {
    path:"dashboard/recipes",
    component: DashboardRecipeComponent,
    canActivate: [AdminGuard]
  },
  {path: 'detail/:id' , component: UserDetailComponent},
  {

    path:'home',
    component: HomeComponent  // replace this with home component
  },
  {
    path:'upload',
    component: UploadComponent  // replace this with about component
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
    path:'login',
    component: LoginComponent  // replace this with frequently asked questions component
  },
  {
    path:'sign-up',
    component: SignUpComponent  // replace this with frequently asked questions component
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
