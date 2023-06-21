import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { IricComponent } from './escuela/iric/iric.component';
import { entornos } from './escuela/escuelaEntornos.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formularios/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    IricComponent,
    entornos,
    MenuComponent,
    SumarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
