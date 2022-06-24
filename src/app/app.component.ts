import { Component } from '@angular/core';
import { faFileCode, faUserGroup, faDatabase, faBars,faXmark } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LifeSup';
  faBars = faBars;
  faDatabase = faDatabase;
  faUserGroup = faUserGroup;
  faFileCode = faFileCode;
  faXmark = faXmark;
  img1:string = "assets/img/Frame.png";
}
