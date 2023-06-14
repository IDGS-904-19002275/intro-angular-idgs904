import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  alumnos:any[] = [
  {
    "matricula":1234,
    "nombre":"Juan",
    "correo":"mtzjuan@gmail.com",
    "pago":1250.25,
    "foto":""
  },

  {
    "matricula":1234,
    "nombre":"Juan",
    "correo":"mtzjuan@gmail.com",
    "pago":1250.25,
    "foto":""
  },
  
  {
    "matricula":1234,
    "nombre":"Juan",
    "correo":"mtzjuan@gmail.com",
    "pago":1250.25,
    "foto":""
  }
]
}
