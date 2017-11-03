import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/callers/company.service';
import { CompanyModel } from '../../../models/company.model';
import { jobVacancyModel } from '../../../models/jobVacancy.model';

@Component({
  selector: 'app-student-navigation',
  templateUrl: './student-navigation.component.html',
  styleUrls: ['./student-navigation.component.css']
})
export class StudentNavigationComponent implements OnInit {

  constructor(
    private store: StoreService,
    private company: CompanyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToGetJobs(){
    this.company.getALLVacancies()
      .then(result => {
        this.store.jobVacancyList = new Array<jobVacancyModel>();
        this.store.jobVacancyList = JSON.parse(JSON.stringify(result));
        this.router.navigateByUrl('/studentpage/jobs');
      }).catch(error => {
        console.log(error);
      });
  }

goJobs() {
    this.router.navigateByUrl('/studentpage/jobs');
  }

  goProfile() {
    this.router.navigateByUrl('/studentpage/studentprofile');
  }

 createResume() {
    this.router.navigateByUrl('/studentpage/createresume');
  }
}
