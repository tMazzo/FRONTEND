import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent  implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  linkP: string = '';
  imgP: string = '';

  constructor(
    private sProyectoService: SProyectoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyecto(this.nombreP ,this.descripcionP, this.linkP, this.imgP);
    this.sProyectoService.save(expe).subscribe(
      data => {
        alert("Proyecto añadido.");
        this.router.navigate(['']);
      }, err => {
        console.log("Falló la creación del Proyecto (onCreate())");
        this.router.navigateByUrl('/'); // Navega a la página de inicio
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }

}
