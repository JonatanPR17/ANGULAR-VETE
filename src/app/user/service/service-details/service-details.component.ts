import { Component } from '@angular/core';
import { NavigationMenuComponent } from "../../navigation-menu/navigation-menu.component";
import { FooterPageComponent } from "../../footer-page/footer-page.component";

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    NavigationMenuComponent,
    FooterPageComponent, 
  ],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {

}
