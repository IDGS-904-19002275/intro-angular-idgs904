import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnoForm!FormGorup;

constructor(private readonly) fb:FormBuilder{
  this.alumnoFom=this.initForm()

}


obtenerDatosVoid(){
  const math=this.alumnoform.get('matricula')?__value
  console.log('matricula',mat)
  const nom=this.alumnoform.get('nombre')?.value
  console.log('nombre,nom')
  
}
}
