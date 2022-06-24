import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-bar',
  templateUrl: './list-bar.component.html',
  styleUrls: ['./list-bar.component.scss']
})
export class ListBarComponent implements OnInit {

  listNav = [
    // {
    //   name: 'Home',
    //   element: '',
    // },
    // {
    //   name: 'About Us',
    //   element: '',
    // },
    {
      name: 'Sevirce',
      linkRouter: '',
      element: '',
    },
    {
      name: 'Cases',
      linkRouter: '',
      element: '',
    },
    {
      name: 'Block',
      linkRouter: '',
      element: '',
    },
    {
      name: 'Training',
      linkRouter: '',
      element: '',
    },
    {
      name: 'Careers',
      linkRouter: '',
      element: '',
    },
    {
      name: 'Contact Us',
      linkRouter: '',
      element: '',
    },

  ]
  arrayLanguage =[
    {
      name: 'VN',
      linkRouter: '',
      element: '',
    },
    {
      name: '|',
      linkRouter: '',
      element: '',
    },
    {
      name: 'ENG',
      linkRouter: '',
      element: '',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
