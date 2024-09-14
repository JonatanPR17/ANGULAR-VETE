import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationMenuComponent } from "../../navigation-menu/navigation-menu.component";
import { FooterPageComponent } from "../../footer-page/footer-page.component";
import { PortadaComponent } from "../portada/portada.component";
import { serviceList } from '../../home/component-service/component.mock'; // Asegúrate de que este archivo exporte correctamente `serviceList`

@Component({
  selector: 'app-service-layout',
  standalone: true,
  imports: [
    CommonModule, // Necesario para directivas como *ngFor
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    NavigationMenuComponent, 
    FooterPageComponent, 
    PortadaComponent
  ],
  templateUrl: './service-layout.component.html',
  styleUrls: ['./service-layout.component.css'] // Corrección aquí
})
export class ServiceLayoutComponent {
  serviceLists = serviceList; // Asegúrate de que `serviceList` esté correctamente importado y sea un array
}
