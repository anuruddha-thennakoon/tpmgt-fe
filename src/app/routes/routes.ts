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
import { JobsComponent } from '../components/student-page/jobs/jobs.component';
import { StudentProfileComponent } from '../components/student-page/student-profile/student-profile.component';
import { CompanyProfileComponent } from '../components/company-page/company-profile/company-profile.component';
import { PublishVacanciesComponent } from '../components/company-page/publish-vacancies/publish-vacancies.component';
import { ReportsComponent } from '../components/company-page/reports/reports.component';
import { CreateResumeComponent } from '../components/student-page/create-resume/create-resume.component';
import { StudentHelpComponent } from '../components/student-help/student-help.component';
import { AdminInquiryViewComponent } from '../components/admin-page/admin-inquiry-view/admin-inquiry-view.component';
import { AdminCompanyViewComponent } from '../components/admin-page/admin-company-view/admin-company-view.component';
import { AdminCreateAccountComponent } from '../components/admin-page/admin-create-account/admin-create-account.component';
import { CompanyInternComponent } from '../components/company-page/company-intern/company-intern.component';

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    {
        path: 'studentpage',
        component: StudentPageComponent,
        children: [
            { path: 'jobs', component: JobsComponent },
            { path: 'studentprofile', component: StudentProfileComponent },
            { path: 'createresume', component: CreateResumeComponent },
        ]
    },
    { path: 'facultypage', component: FacultyPageComponent },
    { path: 'companypage', component: CompanyPageComponent },
    { path: 'studenthelp', component: StudentHelpComponent },
    {
        path: 'adminpage',
        component: AdminPageComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            { 
                path: 'admininquiryview', 
                component: AdminInquiryViewComponent 
            },
            { 
                path: 'admincompanyview', 
                component: AdminCompanyViewComponent 
            },
            { 
                path: 'admincreateaccount', 
                component: AdminCreateAccountComponent 
            },
        ]
    },
    {
        path: 'companyProfile',
        component: CompanyProfileComponent
    },
    {
        path: 'publishVacancies',
        component: PublishVacanciesComponent
    },
    {
        path: 'reports',
        component: ReportsComponent
    },
    {
        path: 'interns',
        component: CompanyInternComponent
    }


]
