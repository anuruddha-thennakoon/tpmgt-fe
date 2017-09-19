import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // isLogged: boolean = false;

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {
    // this.isLogged = this.store.authData.isLogged;
  }

}
