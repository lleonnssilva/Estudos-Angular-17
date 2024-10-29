import { Component } from '@angular/core';
import { MusicaService } from '../../services/musica.service';
import { Musica } from '../../models/musica.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormControl,ReactiveFormsModule,FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-musicas',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule,ReactiveFormsModule],
  providers: [MusicaService],
  templateUrl: './musicas.component.html',
  styleUrl: './musicas.component.css'
})
export class MusicasComponent {

musicas$ = new Observable<Musica[]>();

formularioMusicas: FormGroup;

  constructor(private fb: FormBuilder,private musicaService: MusicaService) {
    this.formularioMusicas = this.fb.group({
      id: new FormControl(null),
      autor: new FormControl('', [Validators.required,Validators.minLength(3)]),
      titulo: new FormControl('',[Validators.required,Validators.minLength(3)])
    });
    this.obterMusicas();
  }


//Listar as músicas
obterMusicas(){
  this.formularioMusicas.reset();
  this.musicas$ = this.musicaService.obterMusicas();
}

//Criar/Alterar música
salvarMusica(){
  if(!this.formularioMusicas.value.titulo || !this.formularioMusicas.value.autor)
    return;

  if(this.formularioMusicas.value.id){
    this.atualizarMusica();
    return;
  }
 
  
  this.formularioMusicas.value.id = Math.floor(Math.random() * 1000).toString();
  this.musicaService.cadatrarMusica(this.formularioMusicas.value)
   .subscribe(_ => this.obterMusicas());
}

atualizarMusica(){
  this.musicaService.editarMusica(this.formularioMusicas.value)
    .subscribe(_ => this.obterMusicas());
}

//Escolher uma música no grid para alterar
selecionarMusica(musica:Musica){

  this.formularioMusicas.setValue({
    id: musica.id,
    autor: musica.autor,
    titulo: musica.titulo
  });
}

//Remover uma música selecionada
removerMusica(id:Number){
  this.musicaService.removerMusica(id)
    .subscribe(_ => this.obterMusicas());
}

//Limpar campos do form
limpar(){
  this.formularioMusicas.reset();
}
}
