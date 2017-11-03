import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/callers/company.service';
import { CompanyModel } from '../../../models/company.model';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.css']
})
export class AdminNavigationComponent implements OnInit {

  newCommpany: CompanyModel = new CompanyModel();

  constructor(
    private router: Router,
    private company: CompanyService
  ) { }

  ngOnInit() { }

  goDashboard() {
    this.router.navigateByUrl('/adminpage/dashboard');
  }

  goInquiries() {
    this.router.navigateByUrl('/adminpage/admininquiryview');
  }

  goStudentRecords() {
    this.router.navigateByUrl('/adminpage/inquries');
  }

  goViewCompanies() {
    this.router.navigateByUrl('/adminpage/admincompanyview');
  }

  goCreateAccount() {
    this.router.navigateByUrl('/adminpage/admincreateaccount');
  }

  viewAllCompanies() {
    this.company.getALLCompanies()
      .then(result => {
        console.log(result);
      }).catch(error => {
        console.log(error);
      });
  }

  createCompany() {
    this.company.createCompany(this.newCommpany)
      .then(result => {
        console.log(result);
      }).catch(error => {
        console.log(error);
      });
  }

  
}