import { Directive, input, OnChanges, SimpleChanges } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[starts-with]',
    standalone: true,
    providers:[
        {
            provide: NG_VALIDATORS,
            useExisting: StartsWithValidator,
            multi: true,
        }
       
    ]
})
export class StartsWithValidator implements Validator,OnChanges{

    ngOnChanges(): void {
        this.fn && this.fn();
    }
    private fn?:()=> void;

    comecarCom =  input.required<string>({
        alias : 'starts-with'
    });

    //null está válido
    //ValidatorErros não válido
    validate(control: AbstractControl): ValidationErrors | null {
        const controlValue = control.value as string | null;
        if(!controlValue)
            return null;

        if(controlValue.startsWith(this.comecarCom()))
            return null;

        return {
            startsWith:{
                expected: this.comecarCom(),
                currentValue: controlValue
            }

        }

    }
    registerOnValidatorChange?(fn: () => void): void {
        this.fn = fn;
    }

}