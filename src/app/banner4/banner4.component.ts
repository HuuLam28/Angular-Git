import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner4',
  templateUrl: './banner4.component.html',
  styleUrls: ['./banner4.component.scss']
})
export class Banner4Component implements OnInit {
  descriptionBanner4 = 'Take a look at some of our recently developed products. All listed cases are appreciated by our clients.We design, develop and do branding for our customers.'
  titleBanner4 = 'Case Studies'
  btnBannner4 ='View more Case'
  constructor() { }

  ngOnInit(): void {
  }

}
