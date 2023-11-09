import { getLocaleDateFormat, getLocaleMonthNames } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent{
  lsAlumno:any;
  lsPreguntas:any;

  respuestas:FormGroup = new FormGroup({
    r1: new FormControl('A'),
    r2: new FormControl('B'),
    r3: new FormControl('C'),
    r4: new FormControl('D'),
    r5: new FormControl('A')
  });

  nombreCompleto:string = '';
  edad:number = 0;
  signoZodiacal:string = '';
  imgSource:String = '';
  contadorRespuesta:number = 0;

  GuardarAlumno():void{
    this.nombreCompleto = '';

    this.nombreCompleto = this.lsAlumno['dnombre'] + " "
    + this.lsAlumno['dapaterno'] + " "
    + this.lsAlumno['damaterno'];

    this.CalcularEdad();
    this.BuscarSignoZodiacal();
  }

  CalcularEdad():void{
    let date:Date = new Date();
    this.edad = 0;

    if(this.lsAlumno['dyear'] != ""){
      this.edad = date.getFullYear()-this.lsAlumno['dyear'];

      if(date.getMonth() < this.lsAlumno['dmonth']){
        this.edad--;
      }
    }
  }

  BuscarSignoZodiacal():void{
    this.signoZodiacal = '';
    this.imgSource = '';

    if(this.lsAlumno['dyear'] != ""){
      let year:number = this.lsAlumno['dyear'];
      let indice:number = (year - 4) % 12;
      let indiceValido:number = (indice + 12) % 12;

      let animalesZC = [
        "Rata",
        "Buey",
        "Tigre",
        "Conejo",
        "Dragón",
        "Serpiente",
        "Caballo",
        "Cabra",
        "Mono",
        "Gallo",
        "Perro",
        "Cerdo"
      ];

      this.signoZodiacal = animalesZC[indiceValido];
      this.imgSource = "../../../../assets/img/" + this.signoZodiacal + ".jpg";
    }
  }

  CompararRespuestas():void{
    this.contadorRespuesta = 0;
    for(let i=0; i < 5; i++)
    {
      switch(i){
        case 0:
          if(this.lsPreguntas['dp1'] == this.respuestas.controls['r1'].value){
            this.contadorRespuesta++;
          }; break;
        case 1:
          if(this.lsPreguntas['dp2'] == this.respuestas.controls['r2'].value){
            this.contadorRespuesta++;
          }; break;
        case 2:
          if(this.lsPreguntas['dp3'] == this.respuestas.controls['r3'].value){
            this.contadorRespuesta++;
          }; break;
        case 3:
          if(this.lsPreguntas['dp4'] == this.respuestas.controls['r4'].value){
            this.contadorRespuesta++;
          }; break;
        case 4:
          if(this.lsPreguntas['dp5'] == this.respuestas.controls['r5'].value){
            this.contadorRespuesta++;
          }; break;
      }
    }
  }

  Mostrar():void{
    let dataAlumno:any = localStorage.getItem('Alumno');
    let dataPreguntas:any = localStorage.getItem('Preguntas');

    this.lsAlumno = JSON.parse(dataAlumno);
    this.lsPreguntas = JSON.parse(dataPreguntas);

    this.GuardarAlumno();
    this.CompararRespuestas();
  }
}

