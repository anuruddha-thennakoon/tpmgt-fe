import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-admin-common-navigation',
  templateUrl: './admin-common-navigation.component.html',
  styleUrls: ['./admin-common-navigation.component.css']
})
export class AdminCommonNavigationComponent implements OnInit {

  // isLogged: boolean = false;

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {
    // this.isLogged = this.store.authData.isLogged;
  }

}
