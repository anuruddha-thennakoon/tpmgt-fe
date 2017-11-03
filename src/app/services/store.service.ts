import { Injectable } from '@angular/core';
import { CompanyModel } from '../models/company.model';   
import { jobVacancyModel } from '../models/jobVacancy.model' ;  
import { studentModel } from '../models/student.model' ;  

@Injectable()
export class StoreService {

  companyList: Array<CompanyModel>;
  company:CompanyModel;

  jobVacancyList: Array<jobVacancyModel>;
  jobVacancy:jobVacancyModel;

  studentList: Array<studentModel>;
  student:studentModel;
  
  constructor() { }

}
