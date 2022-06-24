import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-about',
  templateUrl: './header-about.component.html',
  styleUrls: ['./header-about.component.scss']
})
export class HeaderAboutComponent implements OnInit {
  image1: string = "assets/img/1.png"
  image2: string = "assets/img/2.png"
  image3: string = "assets/img/3.png"
  constructor() { }

  sologanHeaderAbout = 'A team that has fun'
  
  ngOnInit(): void {
  }

}
