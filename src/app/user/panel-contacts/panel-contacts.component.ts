import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-panel-contacts',
  standalone: true,
  imports: [PanelContactsComponent, NgIf],
  templateUrl: './panel-contacts.component.html',
  styleUrl: './panel-contacts.component.css'
})
export class PanelContactsComponent {

  /* contador : number = 0
  valueMap : boolean = false;
  valueShedule : boolean = false;
  
  value(){
    this.contador++
    if(this.contador%2!=0){
      this.valueMap = true;
    }else{
      this.valueMap = false;
    }
    
  }
  
  nose(){
    
    this.contador++

    if(this.contador%2!=0){

      this.valueShedule = true;
    }else{
      this.valueShedule  = false;
    }

  } */
  
  info1 : boolean = false  
  info2 : boolean = false
  info3 : boolean = false


  hiddenInfo(indiceDiv: number){
    if (indiceDiv===1) {
      this.info1 = !this.info1
      this.info2 = false
      this.info3 = false
    } else if (indiceDiv===2){
      this.info2 = !this.info2
      this.info1 = false
      this.info3 = false
    } else if (indiceDiv===3){
      this.info3 = !this.info3
      this.info1 = false
      this.info2 = false
    }
  }

}
