import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/callers/company.service';
import { jobVacancyModel } from '../../../models/jobVacancy.model';
import { StoreService } from '../../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-page',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

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



}
