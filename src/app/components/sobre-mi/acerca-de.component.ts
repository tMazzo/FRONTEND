import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { SSobreMiService } from 'src/app/services/s-sobre-mi.service';
import { SobreMi } from 'src/app/model/sobre-mi';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  sobreMi: SobreMi[] = [];
  isLogged = false;
  
  constructor(
  private sSobreMiService: SSobreMiService,
  private tokenService: TokenService
  ){ }

  ngOnInit(): void{
    this.cargarSobreMi();
    this.isLogged = !!this.tokenService.getToken(); // utilizando !! para convertir el valor en un booleano

  }

  cargarSobreMi(): void {
    this.sSobreMiService.lista().subscribe(
      data => {
        this.sobreMi = data;
      },
      err => console.log("No se pudo cargar el texto en sobre mí.")
    );
  }
    // BORRAR DATOS
    delete(id?: number): void {
      if (id != undefined) {
        const index = this.sobreMi.findIndex(e => e.id === id);
        this.sSobreMiService.delete(id).subscribe(
          data => {
            this.sobreMi.splice(index, 1);
  
          }, err => {
            console.log("No se pudo borrar el sobre mi.");
          }
        );
      }
    }
  }