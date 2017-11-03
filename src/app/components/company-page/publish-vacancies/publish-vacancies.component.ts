import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../services/callers/company.service';
import { jobVacancyModel } from '../../../models/jobVacancy.model';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-publish-vacancies',
  templateUrl: './publish-vacancies.component.html',
  styleUrls: ['./publish-vacancies.component.css']
})
export class PublishVacanciesComponent implements OnInit {

  newVacancy: jobVacancyModel = new jobVacancyModel();

  constructor(
    private store: StoreService,
    private company: CompanyService
  ) { }

  ngOnInit() {
  }

  setVacancy(jobVacancy) {
    this.store.company = jobVacancy;
  }

  createJobVacancy() {
    this.company.createVacancies(this.newVacancy)
      .then(result => {
        this.newVacancy.companyName = "";
        this.newVacancy.jobTitle = "";
        this.newVacancy.description = "";
        this.newVacancy.duration = "";
        this.newVacancy.paidNonPaid = "";
        console.log(result);
      }).catch(error => {
        console.log(error);
      });
  }

}
