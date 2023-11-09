import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResultadosComponent } from '../resultados/resultados.component';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent extends ResultadosComponent implements OnInit {
  alumno!:FormGroup;

  ngOnInit(): void {
    this.alumno = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      day: new FormControl(''),
      month: new FormControl(''),
      year: new FormControl(''),
      genero: new FormControl('')
    });

  }

  onSubmit(){
    console.log(this.alumno.controls['nombre'].value);
    console.log(this.alumno.controls['apaterno'].value);
    console.log(this.alumno.controls['amaterno'].value);
    console.log(this.alumno.controls['day'].value);
    console.log(this.alumno.controls['month'].value);
    console.log(this.alumno.controls['year'].value);
    console.log(this.alumno.controls['genero'].value);

    let data = {
      dnombre: this.alumno.controls['nombre'].value,
      dapaterno: this.alumno.controls['apaterno'].value,
      damaterno: this.alumno.controls['amaterno'].value,
      dday: this.alumno.controls['day'].value,
      dmonth: this.alumno.controls['month'].value,
      dyear: this.alumno.controls['year'].value
    };

    localStorage.setItem('Alumno', JSON.stringify(data));
  }

  CambiarGenero(genero:boolean):void{
    if(genero)
      this.alumno.controls['genero'].setValue('Masculino');
    else
      this.alumno.controls['genero'].setValue('Femenino');
  }
}
