import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body1',
  templateUrl: './body1.component.html',
  styleUrls: ['./body1.component.scss']
})
export class Body1Component implements OnInit {
  item1:string = "assets/img/item1.png"
  item2:string = "assets/img/item2.png"
  item3:string = "assets/img/item3.png"
  item4:string = "assets/img/item4.png"
  item5:string = "assets/img/item5.png"
  item6:string = "assets/img/item6.png"
  item7:string = "assets/img/item7.png"
  item8:string = "assets/img/item8.png"

  userMember = [
    {
      img: this.item1,
      name: 'Linh Le',
      position: 'UX/UI Designer',
    },
    {
      img: this.item2,
      name: 'Trang Dao',
      position: 'QA',
    },
    {
      img: this.item3,
      name: 'Tung Tran',
      position: 'Tester',
    },
    {
      img: this.item4,
      name: 'Hai Pham',
      position: 'Tester',
    },
    {
      img: this.item5,
      name: 'Linh Le',
      position: 'IOS Developer',
    },
    {
      img: this.item6,
      name: 'Binh Pham',
      position: 'Android Developer',
    },
    {
      img: this.item7,
      name: 'Ha Van',
      position: 'UX/UI Designer',
    },
    {
      img: this.item8,
      name: 'Linh Le',
      position: 'UX/UI Designer',
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
