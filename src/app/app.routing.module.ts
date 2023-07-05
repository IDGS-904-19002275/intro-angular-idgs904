import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { IricComponent } from "./escuela/iric/iric.component";
import { OperasBasComponent } from "./escuela/formularios/operas-bas/operas-bas.component";
import { AlumnoReactiveComponent } from "./formularios/alumno-reactive/alumno-reactive.component";

const routes:Routes=[
    {path:'',redirectTo:'/home', pathMatch:'full'},
    {path:'Iric', component : IricComponent},
    {path:'Opersbas', component : OperasBasComponent},
    {path:'Form', component : AlumnoReactiveComponent},
    
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]



})

export class AppRoutingModule{}