import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { BannerComponent } from './components/banner/banner.component';
import { UbicationComponent } from './components/ubication/ubication.component';
import { RadioOnlineComponent } from './components/radio-online/radio-online.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';
import { NewsComponent } from './components/news/news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavbarComponent,
    TestimoniesComponent, 
    BannerComponent, 
    UbicationComponent,
    RadioOnlineComponent,
    AboutComponent, 
    ServicesComponent, 
    FooterSectionComponent,
    NewsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyect-insight';


}
