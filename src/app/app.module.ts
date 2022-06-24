
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';

import { BrandComponent } from './brand/brand.component';
import { ListBarComponent } from './list-bar/list-bar.component';
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from './banner2/banner2.component';
import { Banner3Component } from './banner3/banner3.component';
import { Banner4Component } from './banner4/banner4.component';
import { Banner5Component } from './banner5/banner5.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderAboutComponent } from './header-about/header-about.component';
import { BodyAboutComponent } from './body-about/body-about.component';
import { Body1Component } from './body1/body1.component';
import { FooterAboutComponent } from './footer-about/footer-about.component';

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { AppComponent } from "./app.component";
import { SwiperModule } from "swiper/angular";
import { slideComponent } from './slide/slide.component';





@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ListBarComponent,
    BannerComponent,
    Banner2Component,
    Banner3Component,
    Banner4Component,
    Banner5Component,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    HeaderAboutComponent,
    BodyAboutComponent,
    Body1Component,
    FooterAboutComponent,
    slideComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    SwiperModule,CommonModule, FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
