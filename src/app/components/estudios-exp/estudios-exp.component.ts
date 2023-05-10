import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-estudios-exp',
  templateUrl: './estudios-exp.component.html',
  styleUrls: ['./estudios-exp.component.css'],
})

export class EstudiosExp implements OnInit {
  expe: Experiencia[] = []; 
  educacion: Educacion[] = [];
  isLogged = false;

  constructor(
    private sExperiencia: SExperienciaService,
    private sEducacion: SEducacionService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEducacion();
    this.isLogged = !!this.tokenService.getToken(); // utilizando !! para convertir el valor en un booleano
  }

  // CARGAR DATOS
  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(
      data => {
        this.expe = data;
      },
      err =>console.log("No se pudo cargar la experiencia laboral.")
    );
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(
      data => {
        this.educacion = data;
      },
      err => console.log("No se pudo cargar la educación.")
    );
  }

  // BORRAR DATOS
  delete(id?: number, type?: string): void {
    if (id != undefined && type != undefined) {
      if (type === 'exp') {
        const index = this.expe.findIndex(e => e.id === id);
        this.sExperiencia.delete(id).subscribe(
          data => {
            this.expe.splice(index, 1);

          }, err => {
            alert("No se pudo borrar la experiencia laboral.");
          }
        );
      } else if (type === 'edu') {
        const index = this.educacion.findIndex(e => e.id === id);
        this.sEducacion.delete(id).subscribe(
          data => {
            this.educacion.splice(index, 1);

          }, err => {
            alert("No se pudo borrar la educación.");
          }
        );
      }
    }
  }


  
}
