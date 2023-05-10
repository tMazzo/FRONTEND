import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { Titulo } from 'src/app/model/titulo';
import { Contacto } from 'src/app/model/contacto';
import { SContactoService } from 'src/app/services/s-contacto.service';
import { SPerfilService } from 'src/app/services/s-perfil.service';
import { STituloService } from 'src/app/services/s-titulo.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  perfil: Perfil[] = [];
  contacto: Contacto[] = [];  
  titulo: Titulo[] = [];
  isLogged = false;

  constructor(
    private sPerfil: SPerfilService,
    private sContacto: SContactoService,
    private sTituloService: STituloService,
    private tokenService: TokenService
  ){}

  ngOnInit(): void{
    this.cargarPerfil();
    this.cargarContacto();
    this.cargarTitulo();
    this.isLogged = !!this.tokenService.getToken(); // utilizando !! para convertir el valor en un booleano
  }

  cargarPerfil(): void {
    this.sPerfil.lista().subscribe(
      data => {
        this.perfil = data;
      },
      err => console.log("No se pudo cargar el perfil.")
    );
  }
  cargarContacto(): void {
    this.sContacto.lista().subscribe(
      data => {
        this.contacto = data;
      },
      err => console.log("No se pudo cargar el contacto.")
    );
  }

  cargarTitulo(): void {
    this.sTituloService.lista().subscribe(
      data => {
        this.titulo = data;
      },
      err => console.log("No se pudo cargar el titulo.")
    );
  }

}
