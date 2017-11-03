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
        .get('http://127.0.0.1:8000/api/company')
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }

  createCompany(data) {
    return new Promise((resolve, reject) => {
      this.axios
        .post('http://127.0.0.1:8000/api/company', data)
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }

}
