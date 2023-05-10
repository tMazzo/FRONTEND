import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';


@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})

export class NewExperienciaComponent implements OnInit {
  anioE: string = '';
  nombreE: string = '';
  localidadE: string = '';
  descripcionE: string = '';

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.anioE ,this.nombreE, this.localidadE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida.");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la creación de experiencia laboral (onCreate())");
        this.router.navigateByUrl('/'); // Navega a la página de inicio
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }

}
