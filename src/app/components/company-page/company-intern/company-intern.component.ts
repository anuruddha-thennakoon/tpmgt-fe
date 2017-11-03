import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-intern',
  templateUrl: './company-intern.component.html',
  styleUrls: ['./company-intern.component.css']
})
export class CompanyInternComponent implements OnInit {

  constructor(
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
  }
}
