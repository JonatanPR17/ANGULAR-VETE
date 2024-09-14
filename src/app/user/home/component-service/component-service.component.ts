import { Component } from '@angular/core';
import { HomeLayaoutComponent } from '../home-layaout/home-layaout.component';
import { serviceList } from './component.mock';
import { CommonModule, LowerCasePipe, NgFor } from '@angular/common';
import {  FormBuilder, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-component-service',
  standalone: true,
  imports: [HomeLayaoutComponent,  NgFor,CommonModule,RouterOutlet,RouterLinkActive,RouterLink, LowerCasePipe, ReactiveFormsModule],
  templateUrl: './component-service.component.html',
  styleUrl: './component-service.component.css'
})
export class ComponentServiceComponent {
  public contentService = serviceList
  public infoFing : any = ""

  registerContent : boolean = false

  getInfo(id: number ){
    this.infoFing = this.contentService.find(element => element.id === id)
  }

  formRegisterContacts: FormGroup

  constructor ( private myForm : FormBuilder ){
    this.formRegisterContacts = this.myForm.group({
      
    })
  }
  
  onSubmit(){

  }


  register(){
    this.registerContent = true
  }

}
