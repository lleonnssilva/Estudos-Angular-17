import { Component, inject, input } from "@angular/core";
import { ControlValueAccessor, FormsModule, NgControl } from "@angular/forms";

@Component({
    selector:'meu-input',
    standalone: true,
    imports:[FormsModule],
    template:`
    <label>{{label()}}</label>
    <input
        type="text" 
        [(ngModel)]="inputValue"
        (focus)="onTouched && onTouched()"
        (input)="onChange && onChange(inputValue)"
        [disabled]="isDisabled"
        placeholder="Logradouro"
    />
    `,
    styleUrl:`meu-input.component.css`

})

export class MeuInputComponent implements ControlValueAccessor{
    inputValue = "";
    label = input.required();
    private ngControl = inject(NgControl, { optional:true });
    protected onTouched?: () => {}
    protected onChange?: (value: string) =>{}
    protected isDisabled = false;

    constructor() {
        if(this.ngControl)
            this.ngControl.valueAccessor = this;
        
    }

    //setar valor para input
    writeValue(obj: string): void {
        this.inputValue = obj;
    }

    //setar se houve mudança atribui função
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    //setar se houve foco atribui função
    registerOnTouched(fn: any): void {
       this.onTouched = fn;
    }

    //controlar input disabled/enabled
    setDisabledState?(isDisabled: boolean): void {
       this.isDisabled = isDisabled;
    } 

}