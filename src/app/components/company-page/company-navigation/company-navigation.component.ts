import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-navigation',
  templateUrl: './company-navigation.component.html',
  styleUrls: ['./company-navigation.component.css']
})
export class CompanyNavigationComponent implements OnInit {

  constructor(
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToProfile(){
    this.router.navigateByUrl('/company-profile');
  }


}
