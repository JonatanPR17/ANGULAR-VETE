import { Component } from '@angular/core';
import { NavigationMenuComponent } from "../../navigation-menu/navigation-menu.component";

@Component({
  selector: 'app-products-layout',
  standalone: true,
  imports: [NavigationMenuComponent],
  templateUrl: './products-layout.component.html',
  styleUrl: './products-layout.component.css'
})
export class ProductsLayoutComponent {

}
