import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/model/contacto';
import { SContactoService } from 'src/app/services/s-contacto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {
  contacto: Contacto[] = [];  
  isLogged = false;

  constructor(
    private sContacto: SContactoService,
    private tokenService: TokenService
  ){}

  ngOnInit(): void{
    this.cargarContacto();
    this.isLogged = !!this.tokenService.getToken(); // utilizando !! para convertir el valor en un booleano
  }

  cargarContacto(): void {
    this.sContacto.lista().subscribe(
      data => {
        this.contacto = data;
      },
      err => console.log("No se pudo cargar el contacto.")
    );
  }
}
