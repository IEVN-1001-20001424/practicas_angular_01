import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-axb',
  templateUrl: './multiplicacion-axb.component.html',
  styleUrls: ['./multiplicacion-axb.component.css']
})
export class MultiplicacionAXBComponent {
  num1:number=0;
  num2:number=0;

  res:number=0;

  b:string="";

  multiplicar():void{
    let a = this.num2;
    this.b = "";

    for(let i=1; i < this.num1; i++){
      this.b += this.num2.toString() + "+";

      a+=this.num2;
    }

    this.res = a;
    this.b += this.num2.toString() + "=" + a;
  }
}
