import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperasBasComponent } from './formulario/operas-bas/operas-bas.component';
import { FormsModule } from '@angular/forms';
import { MultiplicacionAXBComponent } from './formulario/multiplicacion-axb/multiplicacion-axb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu/menu.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';


@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    MultiplicacionAXBComponent,
    MenuComponent,
    CinepolisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
