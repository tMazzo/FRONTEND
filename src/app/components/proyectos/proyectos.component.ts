import { Component, HostListener, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent  implements OnInit {
  proyecto: Proyecto[] = []; 
  isLogged = false;
  currentCard = -1;

  constructor(
    private sProyectoService: SProyectoService,
    private tokenService: TokenService
  ) {}

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    const card = targetElement.closest('.card');
    const isClickedInside = card?.classList.contains('card');
    if (isClickedInside) {
      this.currentCard = +card?.getAttribute('data-card-index')!;
    } else {
      this.currentCard = -1;
    }
  }
  ngOnInit(): void {
    this.cargarPerfil();
    this.isLogged = !!this.tokenService.getToken(); // utilizando !! para convertir el valor en un booleano
  }

  cargarPerfil(): void {
    this.sProyectoService.lista().subscribe(
      data => {
        this.proyecto = data;
      },
      err => console.log("No se pudo cargar el proyecto.")
    );
  }

  // BORRAR DATOS
  delete(id?: number): void {
    if (id != undefined) {
      const index = this.proyecto.findIndex(e => e.id === id);
      this.sProyectoService.delete(id).subscribe(
        data => {
          this.proyecto.splice(index, 1);

        }, err => {
          console.log("No se pudo borrar el proyecto.");
        }
      );
    }
  }
}