import { Component, OnInit } from '@angular/core';
// import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-faculty-common-nav-bar',
  templateUrl: './faculty-common-navigation.component.html',
  styleUrls: ['./faculty-common-navigation.component.css']
})
export class FacultyCommonNavigationComponent implements OnInit {

  // isLogged: boolean = false;

  constructor(
    // private store: StoreService
  ) { }

  ngOnInit() {
    // this.isLogged = this.store.authData.isLogged;
  }

}
