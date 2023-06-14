import { Component } from "@angular/core";

@Component({
    selector:  'appentornos',
    template: `
    <div> <b> La Matricula del alumno es: </b>{{Alumno.matricula}}</div>
    <div> <b> El nombre es: </b> {{Alumno.nombre}}</div>
    <div> <b> La fecha de nacimiento  es:</b> {{Alumno.fechaNacimiento | date}}</div>
    <div> <b> Lo que debe  es: </b>{{Alumno.pagoIns | currency}}</div>
    
    `
})



export class entornos{
    constructor(){}
    Alumno={
        matricula:19002275,
        nombre:"SoyYo",
        fechaNacimiento:new Date(),
        pagoIns:2789.99
    }
}
