import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Services
import { StoreService } from './services/store.service';
import { CompanyService } from './services/callers/company.service';
import { AdminService } from './services/callers/admin.service';
import { FacultyService } from './services/callers/faculty.service';
import { StudentService } from './services/callers/student.service';

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
import { AdminNavigationComponent } from './components/admin-page/admin-navigation/admin-navigation.component';
import { DashboardComponent } from './components/admin-page/dashboard/dashboard.component';
import { JobsComponent } from './components/student-page/jobs/jobs.component';
import { StudentProfileComponent } from './components/student-page/student-profile/student-profile.component';
import { CompanyNavigationComponent } from './components/company-page//company-navigation/company-navigation.component';
import { CompanyProfileComponent } from './components/company-page/company-profile/company-profile.component';
import { PublishVacanciesComponent } from './components/company-page/publish-vacancies/publish-vacancies.component';
import { ReportsComponent } from './components/company-page/reports/reports.component';
import { CreateResumeComponent } from './components/student-page/create-resume/create-resume.component';

import { StudentHelpComponent } from './components/student-help/student-help.component';
import { AdminInquiryViewComponent } from './components/admin-inquiry-view/admin-inquiry-view.component';
import { AdminCommonNavigationComponent } from './components/admin-common-navigation/admin-common-navigation.component';
import { AdminCompanyViewComponent } from './components/admin-company-view/admin-company-view.component';
import { AdminCreateAccountComponent } from './components/admin-create-account/admin-create-account.component';
import { CompanyCommonNavigationComponent } from './components/company-page/company-common-navigation/company-common-navigation.component';
import { CompanyInternComponent } from './components/company-page/company-intern/company-intern.component';

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
    SignupComponent,
    AdminNavigationComponent,
    DashboardComponent,
    JobsComponent,
    StudentProfileComponent,
    CompanyNavigationComponent,
    CompanyProfileComponent,
    PublishVacanciesComponent,
    ReportsComponent,
    CreateResumeComponent,
    
    StudentHelpComponent,
    AdminInquiryViewComponent,
    AdminCommonNavigationComponent,
    AdminCompanyViewComponent,
    AdminCreateAccountComponent,
    CompanyCommonNavigationComponent,
    CompanyInternComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    PDFExportModule,
  ],
  providers: [
    StoreService,
    CompanyService,
    AdminService,
    FacultyService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
