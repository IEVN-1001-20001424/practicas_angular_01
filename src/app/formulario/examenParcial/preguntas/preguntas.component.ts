import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ResultadosComponent } from '../resultados/resultados.component';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent extends ResultadosComponent implements OnInit {
  preguntas!:FormGroup;

  ngOnInit(): void {
    this.preguntas = new FormGroup({
      p1: new FormControl(''),
      p2: new FormControl(''),
      p3: new FormControl(''),
      p4: new FormControl(''),
      p5: new FormControl('')
    });

  }

  onSubmit(){
    console.log(this.preguntas.controls['p1'].value);
    console.log(this.preguntas.controls['p2'].value);
    console.log(this.preguntas.controls['p3'].value);
    console.log(this.preguntas.controls['p4'].value);
    console.log(this.preguntas.controls['p5'].value);

    let data2 = {
      dp1: this.preguntas.controls['p1'].value,
      dp2: this.preguntas.controls['p2'].value,
      dp3: this.preguntas.controls['p3'].value,
      dp4: this.preguntas.controls['p4'].value,
      dp5: this.preguntas.controls['p5'].value
    };

    localStorage.setItem('Preguntas',JSON.stringify(data2));
  }
}
