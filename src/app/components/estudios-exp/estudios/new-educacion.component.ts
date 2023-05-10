import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  anioE: string = '';
  nombreE: string = '';
  localidadE: string = '';
  descripcionE: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.anioE ,this.nombreE, this.localidadE, this.descripcionE);
    this.sEducacion.save(educacion).subscribe(
      data => {
        alert("Educación añadida.");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la creación de educación (onCreate())");
        this.router.navigate(['']);
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }

}
