import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperasBasComponent } from './formulario/operas-bas/operas-bas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiplicacionAXBComponent } from './formulario/multiplicacion-axb/multiplicacion-axb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu/menu.component';
import { CinepolisComponent } from './formulario/cinepolis/cinepolis.component';
import { ExamenComponent } from './formulario/examenParcial/examen/examen.component';
import { PreguntasComponent } from './formulario/examenParcial/preguntas/preguntas.component';
import { ResultadosComponent } from './formulario/examenParcial/resultados/resultados.component';


@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    MultiplicacionAXBComponent,
    MenuComponent,
    CinepolisComponent,
    ExamenComponent,
    PreguntasComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
