import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-company-view',
  templateUrl: './admin-company-view.component.html',
  styleUrls: ['./admin-company-view.component.css']
})
export class AdminCompanyViewComponent implements OnInit {

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {}

  setCompany(company) {
    this.store.company = company;
  }

}
