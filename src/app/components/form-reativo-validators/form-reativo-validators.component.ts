import { Component, inject } from '@angular/core';
import { FormsModule, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MeuInputComponent } from "../inputs/input-custom/meu-input.component";

@Component({
  selector: 'app-form-reativo-validators',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MeuInputComponent],
  templateUrl: './form-reativo-validators.component.html',
  styleUrl: './form-reativo-validators.component.css'
})
export class FormReativoValidatorsComponent {


  constructor() {
    //this.form.controls.rua.disable();
    
  }

    private formBuilder = inject(FormBuilder);

    protected form = this.formBuilder.group({
      rua: [null,Validators.required],
      numero: [null,Validators.required],
      complemento :[null]
    });

    formClick(){
      console.log(this.form);
    }

    formEnviar(){
      console.log('enviar click')
    }
}
