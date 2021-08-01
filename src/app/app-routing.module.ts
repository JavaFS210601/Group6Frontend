import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';

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

import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

import { DashboardRecipeComponent } from './component/dashboard-recipe/dashboard-recipe.component';
import { RecipesShowCaseComponent } from './component/recipes-show-case/recipes-show-case.component';
import { RecipeDetailComponent } from './component/recipe-detail/recipe-detail.component';
import { IsLoginGuardGuard } from './guard/is-login-guard.guard';




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

    path:'recipes',
    component: RecipesShowCaseComponent
  },
  {
    path: 'recipe/detail/:id',
    component: RecipeDetailComponent
  },
  {
    path:'home',
    component: HomeComponent  
  },
  {
    path:'upload',
    component: UploadComponent,
    canActivate: [IsLoginGuardGuard]  
  },
  {
    path:'about',
    component: AboutComponent  
  },
  {
    path:'recipecard',
    component: RecipecardComponent  
  },
  {
    path:'faq',
    component: FaqComponent  
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'sign-up',
    component: SignUpComponent,
    canActivate: [IsLoginGuardGuard]  
  },
  {
  path:'reset-password',
  component: ResetPasswordComponent  
  },
  {

    path:"**",
    component: PageNotFoundComponent  

  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
