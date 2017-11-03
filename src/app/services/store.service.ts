import { Injectable } from '@angular/core';
import { CompanyModel } from '../models/company.model';   
import { jobVacancyModel } from '../models/jobVacancy.model' ;  

@Injectable()
export class StoreService {

  companyList: Array<CompanyModel>;
  company:CompanyModel;

  jobVacancyList: Array<jobVacancyModel>;
  jobVacancy:jobVacancyModel;
  
  constructor() { }

}
