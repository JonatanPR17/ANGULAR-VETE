import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent {
  @Input() portadaImagenUrl: string = '';
  @Input() portadaTexto: string = '';
}