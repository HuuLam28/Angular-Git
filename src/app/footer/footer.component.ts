import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faLocationDot = faLocationDot;
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;

  iconLink = [
    {
      icon: faFacebookF,
    },
    {
      icon: faLinkedinIn,
    }
]
  offices =[
    {
      icon: faLocationDot,
      contry: 'Singapore office',
      address : '10 Anson road, International plaza #10-11 079903',
      email: 'Email: hr@lifesup.fi',
      HR: 'HR:',
      phone: '',
    },
    {
      icon: faLocationDot,
      contry: 'Viet Nam office',
      address : 'No 5, 124/32 Do Nha Street, Tay Mo Ward, Nam Tu Liem District, Ha Noi City',
      email: 'Email: hr@lifesup.fi',
      HR: 'HR: hr@lifesup.fi',
      phone: 'Phone: (+84) 94 281 725',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
