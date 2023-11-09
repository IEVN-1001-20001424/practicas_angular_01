import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CinepolisComponent } from './formulario/cinepolis/cinepolis.component';
import { MultiplicacionAXBComponent } from './formulario/multiplicacion-axb/multiplicacion-axb.component';
import { OperasBasComponent } from './formulario/operas-bas/operas-bas.component';

import { ExamenComponent } from './formulario/examenParcial/examen/examen.component';
import { PreguntasComponent } from './formulario/examenParcial/preguntas/preguntas.component';
import { ResultadosComponent } from './formulario/examenParcial/resultados/resultados.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},

  {path:'Cinepolis',component:CinepolisComponent},
  {path:'Multiplicacion',component:MultiplicacionAXBComponent},
  {path:'Operasbas',component:OperasBasComponent},

  {path:'Examen',component:ExamenComponent},
  {path:'Preguntas',component:PreguntasComponent},
  {path:'Resultados',component:ResultadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
