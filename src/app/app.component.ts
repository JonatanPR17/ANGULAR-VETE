import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLayaoutComponent } from './user/home/home-layaout/home-layaout.component';
import { NavigationMenuComponent } from './user/navigation-menu/navigation-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeLayaoutComponent,NavigationMenuComponent,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veterinariaTomy';
}
