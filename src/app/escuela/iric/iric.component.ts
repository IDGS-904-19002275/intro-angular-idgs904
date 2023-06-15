import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  imageWidth?:number=50;
  imageMargin:number=2;
  muestraImg:boolean=false;
  listFilter:string="";

  alumnosIric:any[] = [
  {
    "matricula":19002288,
    "nombre":"Soul",
    "edad":100,
    "correo":"lesoul@gmail.com",
    "pago":1250.25,
    "foto":"https://i.pinimg.com/originals/7b/fa/32/7bfa32216c769a10d290b4c29015f637.png"
  },

  {
    "matricula":19009999,
    "nombre":"C.J",
    "edad":27,
    "correo":"Elcholo@gmail.com",
    "pago":1250.25,
    "foto":"https://i.ytimg.com/vi/Oy7fS5eoXAw/maxresdefault.jpg"
  },
  
  {
    "matricula":10101010,
    "nombre":"Messi",
    "edad":32,
    "correo":"Lapulga@gmail.com",
    "pago":1250.25,
    "foto":"https://pbs.twimg.com/profile_images/1075824593711947776/_7XI8ec0_400x400.jpg"
  }
]

showImagen():void{
  this.muestraImg = !this.muestraImg;
}


}
