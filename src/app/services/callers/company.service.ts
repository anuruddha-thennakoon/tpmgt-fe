import Axios from 'axios';
import { Injectable } from '@angular/core';
import { API } from '../../constants/API';

@Injectable()
export class CompanyService {

  private axios = Axios;
  private api = new API();

  constructor() { }

  getALLCompanies() {
    return new Promise((resolve, reject) => {
      this.axios
        .get(this.api.COMPANY())
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }

  createCompany(data) {
    return new Promise((resolve, reject) => {
      this.axios
        .post(this.api.COMPANY(), data)
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }
  
  getALLStudents() {
    return new Promise((resolve, reject) => {
      this.axios
        .get('https://api.myjson.com/bins/qa203')
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }
  

}
