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
import {StudentCommonNavigationComponent} from '../components/student-common-navigation/student-common-navigation.component';
import {StudentProfileComponent} from '../components/student-profile/student-profile.component';
import { CompanyProfileComponent } from '../components/company-page/company-profile/company-profile.component';
import { PublishVacanciesComponent } from '../components/company-page/publish-vacancies/publish-vacancies.component';
import { ReportsComponent } from '../components/company-page/reports/reports.component';

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'studentpage', component: StudentPageComponent },
    { path: 'facultypage', component: FacultyPageComponent },
    { path: 'companypage', component: CompanyPageComponent },
     { path: 'jobs', component: JobsComponent },
      { path: 'studentprofile', component: StudentProfileComponent },
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
    {
                path: 'companyProfile',
                component : CompanyProfileComponent
    },
    {
        path: 'publishVacancies',
        component : PublishVacanciesComponent
    },
    {
        path: 'reports',
        component : ReportsComponent
    }
    

]
