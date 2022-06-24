import { Component, OnInit,ViewEncapsulation, ViewChild} from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Virtual } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-swiper',
  template: `
    <swiper
      #swiperRef
      [slidesPerView]="3"
      [centeredSlides]="true"
      [spaceBetween]="30"
      [pagination]="{
        type: 'fraction'
      }"
      [navigation]="true"
      [virtual]="true"
      class="mySwiper"
    >

    <ng-template swiperSlide *ngFor="let item of arrItem">
      <div class="slide__item">
          <div  class="slide__item-icon">
              <img src="{{item.imgUrl}}" alt="" class="slide__item-img">
          </div>
          <div class="slide__item-body">
              <div class="slide__item-capstion">{{item.content}}</div>
              <div class="slide__item-descrips">{{item.description}}</div>
              <div class="slide__item-buttons">
                  <div *ngFor= "let btn of btnslide" class="btn-trans">{{btn.text}}</div>
              </div>
          </div>
      </div>
    </ng-template>
  </swiper>
  `,
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class slideComponent implements OnInit {
  btnslide = [
    {
      text: 'Oracle',
    },
    {
      text: 'Primeface',
    },
    {
      text: 'Spring boot',
    },
  ]
  arrItem:any =[
    {
      imgName: 'image 1',
      imgUrl: '../../assets/img/image 1.png',
      content: 'Many Projects of Viettel Group',
      description: 'Viettel is Vietnam’s largest mobile network operator and one of the fastest growing telecommunications companies in the world.'
    },
    {
      imgName: 'image 2',
      imgUrl: '../../assets/img/image 3.png',
      content: 'Many Projects of Topical Group',
      description: 'TagOn is a fashion social community running on web and Mobile platform, which is expected will bring the new professional',


    },
    {
      imgName: 'image 3',
      imgUrl: '../../assets/img/image 5.png',
      content: 'Many Projects of TagOn Group',
      description: 'TagOn is a fashion social community running on web and Mobile platform, which is expected will bring the new professional',


    },
    {
      imgName: 'image 1',
      imgUrl: '../../assets/img/image 1.png',
      content: 'Many Projects of Viettel Group',
      description: 'Viettel is Vietnam’s largest mobile network operator and one of the fastest growing telecommunications companies in the world.'

    },
    {
      imgName: 'image 2',
      imgUrl: '../../assets/img/image 3.png',
      content: 'Many Projects of Topical Group',
      description: 'Viettel is Vietnam’s largest mobile network operator and one of the fastest growing telecommunications companies in the world.'

    },
    {
      imgName: 'image 3',
      imgUrl: '../../assets/img/image 5.png',
      content: 'Many Projects of TagOn Group',
      description: 'TagOn is a fashion social community running on web and Mobile platform, which is expected will bring the new professional',

    },
  ]
  ngOnInit(): void {
  }
  // slides = Array.from({ length: 3 }).map((_, index) => ` ${index + 1}`);
  // @ViewChild('swiperRef', { static: false }) swiper?: SwiperComponent;

  // appendNumber = 3;
  // prependNumber = 1;
}





