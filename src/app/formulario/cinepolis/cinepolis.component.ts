import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  name:string='';
  cant_comp:number=1;
  cineco:boolean=true;
  cant_bolt:number=0;

  costo_boleto:number=12;
  total:number=0;

  descuentosText:string='';
  descuentosCText:string='';

  tieneCineco(hasCineco:boolean):void{
    this.cineco = hasCineco;
    console.log("He/she has CINECO? " + this.cineco);
  }

  procesar():void{
    this.descuentosText = '';
    this.descuentosCText = '';
    this.total = 0;
    if(this.cant_comp/this.cant_bolt >= 1/7){

      if(this.cant_bolt > 2){
        this.descuentos();
      }else{
        this.total = this.costo_boleto * this.cant_bolt;
      }

      if(this.cineco){
        this.descuentoCineco();
      }

    }else{
      this.descuentosText = "No se puede hacer la transacción: "
      + this.cant_comp + " persona no pueden comprar "
      + this.cant_bolt + " boletos."
    }
  }

  descuentos():void{
    let costo_inicial:number=this.costo_boleto * this.cant_bolt;
    let descuento:number=0;

    if(this.cant_bolt > 5){
      descuento = 15 * costo_inicial / 100;
      this.total = costo_inicial - descuento;
    }else{
      descuento = 10 * costo_inicial / 100;
      this.total = costo_inicial - descuento;
    }

    this.descuentosText = 'Descuento ' + this.cant_bolt + ' boletos comprados: -$' + descuento;
  }

  descuentoCineco():void{
    let descuento:number = 10 * this.total / 100;
    this.total -= descuento;

    this.descuentosCText += "Descuento CINECO aplicado: -$" + descuento; 
  }

  vaciar():void{
    this.name = '';
    this.cant_comp = 0;
    this.cant_bolt = 0;
    this.total = 0;
    this.descuentosText = '';
    this.descuentosCText = '';
  }
}