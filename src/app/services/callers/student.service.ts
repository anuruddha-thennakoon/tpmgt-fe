import Axios from 'axios';
import { Injectable } from '@angular/core';
import { API } from '../../constants/API';

@Injectable()
export class StudentService {

  private axios = Axios;
  private api = new API();

  constructor() { }

  getALLStudents() {
    return new Promise((resolve, reject) => {
      this.axios
        .get('http://127.0.0.1:8000/api/student')
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }

  createstudent(data) {
    return new Promise((resolve, reject) => {
      this.axios
        .post('http://127.0.0.1:8000/api/student', data)
        .then(result => resolve(result.data))
        .catch(err => reject(err));
    });
  }



}
