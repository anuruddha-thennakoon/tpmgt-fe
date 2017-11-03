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
import { LoginComponent } from './components/login/login.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { FacultyPageComponent } from './components/faculty-page/faculty-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { StudentNavigationComponent } from './components/student-page/student-navigation/student-navigation.component';
import { FacultyNavigationComponent } from './components/faculty-page/faculty-navigation/faculty-navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminNavigationComponent } from './components/admin-page/admin-navigation/admin-navigation.component';
import { DashboardComponent } from './components/admin-page/dashboard/dashboard.component';
import { ManageStudentComponent } from './components/faculty-page/manage-student/manage-student.component';
import { ReportsFacComponent } from './components/faculty-page/reports/reports.component';
import { PublishmentsComponent } from './components/faculty-page/publishments/publishments.component';
import { AcademicComponent } from './components/faculty-page/academic/academic.component';
import { TraineeRecordsComponent } from './components/faculty-page/trainee-records/trainee-records.component';
import { CreateStudentprofileComponent } from './components/faculty-page/create-studentprofile/create-studentprofile.component';
import { JobsComponent } from './components/student-page/jobs/jobs.component';
import { StudentProfileComponent } from './components/student-page/student-profile/student-profile.component';
import { CompanyNavigationComponent } from './components/company-page//company-navigation/company-navigation.component';
import { CompanyProfileComponent } from './components/company-page/company-profile/company-profile.component';
import { PublishVacanciesComponent } from './components/company-page/publish-vacancies/publish-vacancies.component';
import { ReportsComponent } from './components/company-page/reports/reports.component';
import { CreateResumeComponent } from './components/student-page/create-resume/create-resume.component';
import { StudentHelpComponent } from './components/student-page/student-help/student-help.component';
import { AdminInquiryViewComponent } from './components/admin-page/admin-inquiry-view/admin-inquiry-view.component';
import { AdminCompanyViewComponent } from './components/admin-page/admin-company-view/admin-company-view.component';
import { AdminCreateAccountComponent } from './components/admin-page/admin-create-account/admin-create-account.component';
import { CompanyInternComponent } from './components/company-page/company-intern/company-intern.component';
import { CompanyHomeComponent } from './components/company-page/company-home/company-home.component';
import { SignupRequestComponent } from './components/signup-request/signup-request.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    StudentPageComponent,
    FacultyPageComponent,
    CompanyPageComponent,
    AdminPageComponent,
    StudentNavigationComponent,
    FacultyNavigationComponent,
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
    AdminCompanyViewComponent,
    AdminCreateAccountComponent,
    CompanyInternComponent,
    AcademicComponent,
    TraineeRecordsComponent,
    CreateStudentprofileComponent,
    PublishmentsComponent,
    ManageStudentComponent,
    ReportsFacComponent,
    CompanyHomeComponent,
    SignupRequestComponent
    
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
