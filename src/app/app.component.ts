import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MusicasComponent } from './components/musicas/musicas.component';
import { FormCustomValidatorsComponent } from './components/form-custom-validators/form-custom-validators.component';
import { FormReativoValidatorsComponent } from './components/form-reativo-validators/form-reativo-validators.component';
import { EstiloDinamicoHostComponent } from "./components/estilo-dinamico-host/estilo-dinamico-host.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, EstiloDinamicoHostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
}
