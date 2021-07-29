import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedBootstrapModule } from './shared/shared-bootstrap.module';
import { AboutComponent } from './component/about/about.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FaqComponent } from './component/faq/faq.component';

import { NavComponent } from './component/nav/nav.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { LoginComponent } from './component/login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { UploadComponent } from './component/upload/upload.component';
import { RecipecardComponent } from './component/recipecard/recipecard.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DashboardRecipeComponent } from './component/dashboard-recipe/dashboard-recipe.component';
import { DashboardLeftbarComponent } from './component/dashboard-leftbar/dashboard-leftbar.component';

import { SignUpComponent } from './component/sign-up/sign-up.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FaqComponent,
    NavComponent,
    HeroDetailComponent,
    LoginComponent,

    PageNotFoundComponent,
    UserDetailComponent,
    UploadComponent,
    RecipecardComponent,

    DashboardComponent,
    DashboardRecipeComponent,
    DashboardLeftbarComponent,
    SignUpComponent,
    ResetPasswordComponent


    //declare other components here 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedBootstrapModule,
    RatingModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
