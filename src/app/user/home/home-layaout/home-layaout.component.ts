import { Component } from '@angular/core';
import { NavigationMenuComponent } from "../../navigation-menu/navigation-menu.component";
import { SliderImageComponent } from '../slider-image/slider-image.component';
import { NgIf, UpperCasePipe } from '@angular/common';
import { ComponentServiceComponent } from '../component-service/component-service.component';
import { FooterPageComponent } from "../../footer-page/footer-page.component";
import { PanelContactsComponent } from '../../panel-contacts/panel-contacts.component';
import { ComponentProductsComponent } from '../component-products/component-products.component';

@Component({
  selector: 'app-home-layaout',
  standalone: true,
  imports: [NavigationMenuComponent, SliderImageComponent, NgIf, UpperCasePipe, ComponentServiceComponent, FooterPageComponent, PanelContactsComponent, ComponentProductsComponent],
  templateUrl: './home-layaout.component.html',
  styleUrl: './home-layaout.component.css'
})
export class HomeLayaoutComponent {
  /* masInfo : string = "Hola como estas";

  moreInfo(){
    return console.log("Hola")
  } */
  
  /* valorContent : boolean = true;
  valor12 : boolean = false;

  valor(){
    this.valor12 = true
    this.valorContent=false
  } */

  
  textHidden : boolean = false;
  hiddenButton : boolean = true;

  hiddenText(){
    this.textHidden = true;
    this.hiddenButton = false;
  }

  lessText(){
    this.textHidden = false;
    this.hiddenButton = true;
  }

}
