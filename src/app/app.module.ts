import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { CityViewComponent } from './city-view/city-view.component';
import { SliderComponent } from './slider/slider.component';
import { ModalOptComponent } from './modal-opt/modal-opt.component';
import { ViewSANComponent } from './view-san/view-san.component';
import { ViewDFWComponent } from './view-dfw/view-dfw.component';
import { ViewPHLComponent } from './view-phl/view-phl.component';
import { ViewBOSComponent } from './view-bos/view-bos.component';
import { ViewSRQComponent } from './view-srq/view-srq.component';
import { ViewNYCComponent } from './view-nyc/view-nyc.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactCreateComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    CityViewComponent,
    SliderComponent,
    ModalOptComponent,
    ViewSANComponent,
    ViewDFWComponent,
    ViewPHLComponent,
    ViewBOSComponent,
    ViewSRQComponent,
    ViewNYCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
