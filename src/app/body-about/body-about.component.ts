import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-about',
  templateUrl: './body-about.component.html',
  styleUrls: ['./body-about.component.scss']
})
export class BodyAboutComponent implements OnInit {
  imga:string = "assets/img/a.png"
  imgb:string = "assets/img/b.png"
  imgc:string = "assets/img/c.png"
  constructor() { }

  userLeader = [
    {
      img: this.imga,
      name: 'Linh Le',
      position: 'Co-Founder, CEO',
      detail: 'Ofer is a serial entrepreneur with 10+ year of experience in leading corporate management and business and technology activities. Ofer is a true driver and a heart of Fayrix team. He has a knack for building new realiable relationships.'

    },
    {
      img: this.imgb,
      name: 'Binh Pham',
      position: 'Co-Founder, PM',
      detail: 'Vitaly started his career back in 2004 as a Jr. System Engineer and has eventually evolved into a skilled IT professional and manager. Vitaly is an author of a number of open source projects, Winner of Java ONE and honorable paticipant of JBoss World contests.'
    },
    {
      img: this.imgc,
      name: 'Ha Van',
      position: 'Team Leader',
      detail: 'Alexey has over 15 years of experience in IT consulting and data science. He created and managed analytical system and data warehouse development projects.'
    },
  ]
  ngOnInit(): void {
  }

}
