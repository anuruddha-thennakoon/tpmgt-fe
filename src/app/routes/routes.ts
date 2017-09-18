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

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'studentpage', component: StudentPageComponent },
    { path: 'facultypage', component: FacultyPageComponent },
    { path: 'adminpage', component: AdminPageComponent },
    { path: 'companypage', component: CompanyPageComponent }
]
