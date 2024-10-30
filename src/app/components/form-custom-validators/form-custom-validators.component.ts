import { Component, input, ViewChild, viewChildren } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { StartsWithValidator } from '../../validators/StartsWithValidator';

@Component({
  selector: 'app-form-custom-validators',
  standalone: true,
  imports: [FormsModule,StartsWithValidator],
  templateUrl: './form-custom-validators.component.html',
  styleUrl: './form-custom-validators.component.css'
})
export class FormCustomValidatorsComponent {

  comecarComFieldValue = "";
  
   @ViewChild('form', { static:true}) form!: NgForm;

  printForm(){
    console.log(this.form);
  }
  }
