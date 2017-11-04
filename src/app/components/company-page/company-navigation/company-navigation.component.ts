import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/callers/company.service';
import { CompanyModel } from '../../../models/company.model';
import { jobVacancyModel } from '../../../models/jobVacancy.model';
import { studentModal } from '../../../models/studentCom.model';

@Component({
  selector: 'app-company-navigation',
  templateUrl: './company-navigation.component.html',
  styleUrls: ['./company-navigation.component.css']
})
export class CompanyNavigationComponent implements OnInit {

  constructor(
    private store: StoreService,
    private company: CompanyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goDashboard() {
    this.router.navigateByUrl('');
  }

  goToProfile(){
    this.router.navigateByUrl('/companypage/companyProfile');
  }

  goToPublishVacancy(){
    this.company.getALLVacancies()
      .then(result => {
        this.store.jobVacancyList = new Array<jobVacancyModel>();
        this.store.jobVacancyList = JSON.parse(JSON.stringify(result));
        this.router.navigateByUrl('/companypage/publishVacancies');
      }).catch(error => {
        console.log(error);
      });
  }

  goToReports(){
    this.router.navigateByUrl('/companypage/reports');
  }
  
  goToInterns(){
    
    this.company.getALLStudents()
    .then(result => {
      this.store.studentList = new Array<studentModal>();
      this.store.studentList = JSON.parse(JSON.stringify(result));
      this.router.navigateByUrl('/companypage/interns');
    }).catch(error => {
      console.log(error);
    });
  }

   goToHome(){
     this.company.getALLStudents()
    .then(result => {
      this.store.studentList = new Array<studentModal>();
      this.store.studentList = JSON.parse(JSON.stringify(result));
      this.router.navigateByUrl('/companypage/companyHome');
    }).catch(error => {
      console.log(error);
    });
  }

}
