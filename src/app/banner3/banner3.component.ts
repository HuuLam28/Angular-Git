import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner3',
  templateUrl: './banner3.component.html',
  styleUrls: ['./banner3.component.scss']
})
export class Banner3Component implements OnInit {
  img1:string = "assets/img/Frame.png"
  img2: string = " assets/img/Frame-1.png"
  img3: string = " assets/img/Mask Group.png"

  btnBanner3 ='Learn more'
  titleBanner3 = 'Services'
  introduceBanner3 = 'Lifesup team is capable to handle any kind of projects - from building a dedicated offshore team to embedded software development & end-user mobile applications. We ensure a streamlined business process guaranteeing real business deliverables, full transparency and maximum efficiency for our customers.'
  headerItem = [
    {
      img: this.img1 ,
      para: 'Dedicated Development Team',
    },
    {
      img: this.img2 ,
      para: 'Custom software & mobile development',
    },
    {
      img: this.img3 ,
      para: 'BI & Big Data consulting',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
