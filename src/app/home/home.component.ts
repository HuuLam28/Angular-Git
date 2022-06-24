import { Component, OnInit } from '@angular/core';
import { faFileCode, faUserGroup, faDatabase, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faBars = faBars;
  btnHome ='More About Lifesup'
  constructor() { }

  ngOnInit(): void {
  }

}
