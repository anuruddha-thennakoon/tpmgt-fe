import { Injectable } from '@angular/core';
import { CompanyModel } from '../models/company.model';       

@Injectable()
export class StoreService {

  companyList: Array<CompanyModel>; 
  constructor() { }

}
