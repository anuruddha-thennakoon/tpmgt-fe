import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-student-common-nav-bar',
  templateUrl: './student-common-navigation.component.html',
  styleUrls: ['./student-common-navigation.component.css']
})
export class StudentCommonNavigationComponent implements OnInit {

  // isLogged: boolean = false;

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {
    // this.isLogged = this.store.authData.isLogged;
  }

}
