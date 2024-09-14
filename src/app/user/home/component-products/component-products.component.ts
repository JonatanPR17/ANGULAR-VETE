import { Component } from '@angular/core';
import { HomeLayaoutComponent } from '../home-layaout/home-layaout.component';
import { listProduct, Product } from './component..mock';
import { CommonModule, CurrencyPipe, NgFor, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-component-products',
  standalone: true,
  imports: [HomeLayaoutComponent, NgFor, CurrencyPipe, UpperCasePipe, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './component-products.component.html',
  styleUrl: './component-products.component.css'
})
export class ComponentProductsComponent {

  elements = listProduct

  indexProducts : number = 0; 

  elementNotHidden : Product [] = [];

  constructor(){
    this.changeElements()
  }

  changeElements(){
    const start = this.indexProducts; /* 0 */
    const end = (start + 5) % this.elements.length; /* 5 % 10 = 5 ///  10 % 10 = 0 */

    if(end > start){ /* 5>0     // 0 >5*/
      this.elementNotHidden = this.elements.slice(start,end)
    } else {
      this.elementNotHidden = [
        ...this.elements.slice(start,this.elements.length),  /* su usa el ... para combinar arrays */
        ...this.elements.slice(0, end)
      ]
    }

  }
  

  nextProduct(){
    this.indexProducts=(this.indexProducts+5) % this.elements.length
    this.changeElements()
    console.log("avanzar")
  }
  backProduct(){
    this.indexProducts = (this.indexProducts -5 + this.elements.length) % this.elements.length;
    this.changeElements()
    console.log("retroceder")
  }

}
