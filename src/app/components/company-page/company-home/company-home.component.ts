import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit {

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {
  }

  setStudent(student) {
    this.store.student = student;
  }

}
