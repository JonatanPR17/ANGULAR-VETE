import { Component, OnDestroy, OnInit } from '@angular/core';
import { setTimeout } from 'node:timers';
import { setInterval } from 'node:timers/promises';

@Component({
  selector: 'app-slider-image',
  standalone: true,
  imports: [],
  templateUrl: './slider-image.component.html',
  styleUrl: './slider-image.component.css'
})
export class SliderImageComponent implements OnInit, OnDestroy   {

  /* contentImage : string[] = [
    'image/image2.png',
    'image/image1.png',
    'image/image2.png',
    'image/image1.png',
  ] */

  /* numberImage : number = 0

  

  intervalId: any ;

  ngOnInit(): void {
    
  }

  nexImage(){
    this.numberImage = (this.numberImage+1) % this.contentImage.length
  } */
  

  /*   images: string[] = [
      'image/image2.png',
      'image/image1.png',
      'image/image2.png',
      'image/image1.png'
    ];
    currentIndex: number = 0;
    intervalId: any;
  
    ngOnInit(): void {
      // Cambiar la imagen cada 3 segundos
      this.intervalId = window.setInterval(() => {
        this.nextImage();
      }, 3000);
    }
  
    ngOnDestroy(): void {
      // Limpiar el intervalo cuando se destruya el componente
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
  
    nextImage(): void {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
 */

  contentImage : string[] = [
    'image/image1.png',
    'image/image2.png'
  ] 

  numberImage : number = 0
  contentInterval ?: any 
  
  ngOnInit(): void {
    /* this.contentInterval =  window.setInterval(() => {
      this.changeImage();
    }, 5000); */
  }
  
  ngOnDestroy(): void {
    if (this.contentInterval){
      clearInterval(this.contentInterval)
      console.log("Delete component ok")
    }
  }

  changeImage(){
    this.numberImage = (this.numberImage+1) % this.contentImage.length
    console.log(this.numberImage)
  }

}
