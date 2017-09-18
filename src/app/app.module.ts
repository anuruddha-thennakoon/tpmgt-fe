import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import {
  MdInputModule,
  // MaterialModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSliderModule,
  MdProgressSpinnerModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutes } from './routes/routes';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { FacultyPageComponent } from './components/faculty-page/faculty-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { StudentNavigationComponent } from './components/student-page/student-navigation/student-navigation.component';
import { SendinquiriesComponent } from './components/sendinquiries/sendinquiries.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    LoginComponent,
    TestComponent,
    StudentPageComponent,
    FacultyPageComponent,
    CompanyPageComponent,
    AdminPageComponent,
    StudentNavigationComponent,
    SendinquiriesComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSliderModule,
    MdProgressSpinnerModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
