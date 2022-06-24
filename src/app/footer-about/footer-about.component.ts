import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-about',
  templateUrl: './footer-about.component.html',
  styleUrls: ['./footer-about.component.scss']
})
export class FooterAboutComponent implements OnInit {
  imgBGR:string= "assets/img/footer.png";
  footerimg1:string = "assets/img/footerimg1.png";
  footerimg2:string = "assets/img/footerimg2.png";
  footerimg3:string = "assets/img/footerimg3.png";
  constructor() { }
  title = 'Our Values'
  introduce = 'Lifesup is not just a team of IT developers, we are a team of inspired creators and sincere friends. Our corporate culture is built around 3 solid pillars:'
  listItem = [
    {
      img: this.footerimg1,
      param: 'Personal responsibility',
    },
    {
      img: this.footerimg2,
      param: 'Dedication to quality',
    },
    {
      img: this.footerimg3,
      param: 'Focus on result',
    },
  ]
  ngOnInit(): void {
  }

}
