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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent
    
    //declare other components here 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedBootstrapModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
