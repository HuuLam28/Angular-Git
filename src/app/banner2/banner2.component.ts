import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss']
})
export class Banner2Component implements OnInit {
  titleBanner2 = 'Who We Are'
  intrducebanner2 = 'Founded in 2017, LIFESUP Software is present on the international market as a supplier of innovative solutions, adding business value through technology implementation at a professional level. Focusing our activities toward developing complex software products, LIFESUP Software provides consistent results in emerging fields such as mobile and web-based custom business applications, e- commerce, e-payment, e-security, e-health and enterprise & resource planning and entertainment industry.'
  arrItem = [
    {
      contentHeader: '5+',
      contentPara: 'Years Of Experience'
    },
    {
      contentHeader: '96%',
      contentPara: 'Customer Retention Rate'
    },
    {
      contentHeader: '50+',
      contentPara: 'People on board'
    },
    {
      contentHeader: '60+',
      contentPara: 'Projects completed'
    },
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
