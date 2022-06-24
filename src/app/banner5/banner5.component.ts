import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner5',
  templateUrl: './banner5.component.html',
  styleUrls: ['./banner5.component.scss']
})
export class Banner5Component implements OnInit {
  imgBlog1: string = "assets/img/Rectangle 502.png"
  imgBlog2: string = "assets/img/Rectangle 503.png"
  imgBlog3: string = "assets/img/Rectangle 504.png"

  titleBanner5 ='Our Blog'
  headerItem = [
    {
      img: this.imgBlog1 ,
      date: 'Friday, October 4',
      detail: 'Why are log analytics so important in a monitoring system?'
    },
    {
      img: this.imgBlog2 ,
      date: 'Friday, October 4',
      detail: 'Five AI-based healthcare start-ups to keep an eye on in 2020'
    },
    {
      img: this.imgBlog3 ,
      date: 'Friday, October 4',
      detail: 'Big Data Tech Warsaw Summit 2019 summary'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
