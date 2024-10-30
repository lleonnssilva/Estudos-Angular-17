import { Component } from '@angular/core';
import { EstiloDinamicoHostInputComponent } from '../inputs/input-custom/host/estilo-dinamico-com-host.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estilo-dinamico-host',
  standalone: true,
  imports: [EstiloDinamicoHostInputComponent,FormsModule],
  templateUrl: './estilo-dinamico-host.component.html',
  styleUrl: './estilo-dinamico-host.component.css'
})
export class EstiloDinamicoHostComponent {

}
