import { Routes } from '@angular/router';

import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { LoginComponent } from '../components/login/login.component';
import { TestComponent } from '../components/test/test.component';
import { StudentPageComponent } from '../components/student-page/student-page.component';
import { FacultyPageComponent } from '../components/faculty-page/faculty-page.component';
import { CompanyPageComponent } from '../components/company-page/company-page.component';
import { AdminPageComponent } from '../components/admin-page/admin-page.component';
import { StudentNavigationComponent } from '../components/student-page/student-navigation/student-navigation.component';
import { SendinquiriesComponent } from '../components/sendinquiries/sendinquiries.component';
import { SignupComponent } from '../components/signup/signup.component';
import { DashboardComponent } from '../components/admin-page/dashboard/dashboard.component';
import { JobsComponent } from '../components/jobs/jobs.component';
import { ManageStudentComponent } from '../components/faculty-page/manage-student/manage-student.component';
import { ReportsComponent } from '../components/faculty-page/reports/reports.component';
import { TraineeRecordsComponent } from '../components/faculty-page/trainee-records/trainee-records.component';
import {StudentCommonNavigationComponent} from '../components/student-common-navigation/student-common-navigation.component';
import {FacultyCommonNavigationComponent} from '../components/faculty-page/faculty-common-navigation/faculty-common-navigation.component';
import {StudentProfileComponent} from '../components/student-profile/student-profile.component';
import{CreateResumeComponent} from '../components/create-resume/create-resume.component';
import {EditStudentProfileComponent} from '../components/edit-student-profile/edit-student-profile.component';
import {ApplyJobComponent} from '../components/apply-job/apply-job.component';
import {StudentInquiryComponent} from '../components/student-inquiry/student-inquiry.component';
import {StudentHelpComponent} from '../components/student-help/student-help.component';
export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'studentpage', component: StudentPageComponent },
    { path: 'facultypage', component: FacultyPageComponent },
    { path: 'companypage', component: CompanyPageComponent },
     { path: 'jobs', component: JobsComponent },
     { path: 'managestudent', component: ManageStudentComponent },
     { path: 'reports', component: ReportsComponent },     
     { path: 'traineerecords', component: TraineeRecordsComponent },
      { path: 'studentprofile', component: StudentProfileComponent },
      { path: 'createresume', component: CreateResumeComponent },
       { path: 'editstudentprofile', component: EditStudentProfileComponent },
       {path: 'applyjob', component:ApplyJobComponent},
       {path:'studentinquiry', component:StudentInquiryComponent},
       {path:'studenthelp', component:StudentHelpComponent},
    {
        path: 'adminpage',
        component: AdminPageComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    },

    

]
