import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MusicasComponent } from './components/musicas/musicas.component';
import { FormCustomValidatorsComponent } from './components/form-custom-validators/form-custom-validators.component';
import { FormReativoValidatorsComponent } from './components/form-reativo-validators/form-reativo-validators.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FormReativoValidatorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17';
}
