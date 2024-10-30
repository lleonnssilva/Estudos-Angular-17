import { booleanAttribute, Component, input } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'meu-input-estilo-dinamico',
    standalone: true,
    host:{
        '[class.green]':'isPrimary()',
    },
    imports:[FormsModule],
    template:`
    <label>Escreva Aqui</label>
    <input
        type="text" 
        placeholder="Texto"
    />
    `,
    styleUrl:`estilo-dinamico-com-host.component.css`

})
export class EstiloDinamicoHostInputComponent{
    isPrimary = input(false,{
        transform: booleanAttribute,
    })
}