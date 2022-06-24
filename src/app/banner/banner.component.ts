import { Component, OnInit } from '@angular/core';
import {faDatabase,faUserGroup,faFileCode } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  bannerString = "Where innovation meets excellence";
  
  bannerServices = [
    {
      icon: faDatabase,
      text: 'Building offshore development teams'
    },
    {
      icon: faUserGroup,
      text: 'Custom software development'
    },
    {
      icon: faFileCode,
      text: 'Big data & machine learning'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
