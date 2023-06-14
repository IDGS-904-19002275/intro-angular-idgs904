import { Component } from "@angular/core";

@Component({
    selector:  'appescuela',
    template: `
    <form>
        <label>nombre:</label>
        <input type='text' value=''>
        <button class='btn.btn-primary' >Ingresar</button>
    </form>
    
    `
})



export class escuelaComponent{
    constructor(){}
}