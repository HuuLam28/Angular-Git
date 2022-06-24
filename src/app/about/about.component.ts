import { Component, OnInit } from '@angular/core';
import { faFileCode, faUserGroup, faDatabase, faBars } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faBars = faBars;
  image1: string = "assets/img/1.png"
  image2: string = "assets/img/2.png"
  image3: string = "assets/img/3.png"
  constructor() { }

  ngOnInit(): void {
  }

}
