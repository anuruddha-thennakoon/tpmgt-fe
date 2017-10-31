import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreService } from './services/store.service';

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
import { FacultyNavigationComponent } from './components/faculty-page/faculty-navigation/faculty-navigation.component';
import { SendinquiriesComponent } from './components/sendinquiries/sendinquiries.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminNavigationComponent } from './components/admin-page/admin-navigation/admin-navigation.component';
import { DashboardComponent } from './components/admin-page/dashboard/dashboard.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ManageStudentComponent } from './components/faculty-page/manage-student/manage-student.component';
import {StudentCommonNavigationComponent} from './components/student-common-navigation/student-common-navigation.component';
import {FacultyCommonNavigationComponent} from './components/faculty-page/faculty-common-navigation/faculty-common-navigation.component';
import {StudentProfileComponent} from './components/student-profile/student-profile.component';

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
    FacultyNavigationComponent,
    SendinquiriesComponent,
    SignupComponent,
    AdminNavigationComponent,
    DashboardComponent,
    JobsComponent,
    ManageStudentComponent,
    StudentCommonNavigationComponent,
    FacultyCommonNavigationComponent,
    StudentProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
