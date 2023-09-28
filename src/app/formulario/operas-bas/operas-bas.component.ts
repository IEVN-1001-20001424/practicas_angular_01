import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  
  numGrados:string='';

  grado_capturar:string='';
  grado_convertir:string='';

  conversion:number=0;

  cambiar(g:string){
    switch(g){
      case 'C':
        this.grado_capturar = 'Farenheit';
        this.grado_convertir = 'Celsius'; break;
      case 'F':
        this.grado_capturar = 'Celsius';
        this.grado_convertir = 'Farenheit'; break;
    }
  }

  calcular(){
    switch(this.grado_convertir){
      case 'Celsius': this.farenheit_to_celsius(); break;
      case 'Farenheit': this.celsius_to_farenheit(); break;
    }
  }

  celsius_to_farenheit():void{
    this.conversion = parseInt(this.numGrados) * 1.8 + 32;
  }

  farenheit_to_celsius():void{
    this.conversion = (parseInt(this.numGrados) - 32) / 1.8;
  }
}
