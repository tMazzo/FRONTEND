import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/model/perfil';
import { Titulo } from 'src/app/model/titulo';
import { ImageService } from 'src/app/services/image.service';
import { SPerfilService } from 'src/app/services/s-perfil.service';
import { STituloService } from 'src/app/services/s-titulo.service';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.css']
})
export class EditPerfilComponent implements OnInit {
  // VARIABLES DE PERFIL
  perfil: Perfil = null;

  // VARIABLES DE TITULOS
  titulo: Titulo[] = [];
  nombreT: string = '';
  isAgree = false;

  constructor(
    // SERVICIOS
    private sPerfilService: SPerfilService,
    private sTituloService: STituloService,
    public imageService: ImageService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarTitulo();
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPerfilService.detail(id).subscribe(
      data => {
        this.perfil = data;
      }, err => {
        alert("Error al modificar perfil");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPerfilService.update(id, this.perfil).subscribe(
      data => {
        console.log(id);
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar perfil");
        this.router.navigate(['']);
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }

  // CRUD TITULOS
  // CARGAR DATOS
  cargarTitulo(): void {
    this.sTituloService.lista().subscribe(
      data => {
        this.titulo = data;
      },
      err => console.log("No se pudo cargar el titulo.")
    );
  }

  // CREAR DATOS
  onCreate(): void {
    const titulo = new Titulo(this.nombreT);
    this.sTituloService.save(titulo).subscribe(
      data => {
        alert("Titulo añadido.");
        this.router.navigate(['/editperfil/1']);
      }, err => {
        alert("Falló la creación del titulo (onCreate())");
        this.router.navigateByUrl('/editperfil/1'); // Navega a la página de inicio
      }
    )
  }

  uploadImage($event: any): void {
    this.imageService.uploadImage($event)

  }

  // BORRAR DATOS
  delete(id?: number, event?: Event): void {
    if (event) {
      event.preventDefault(); // Prevenir la acción predeterminada del botón
    }
    if (id != undefined) {
      const index = this.titulo.findIndex(e => e.id === id);
      this.sTituloService.delete(id).subscribe(
        data => {
          this.titulo.splice(index, 1);
        }, err => {
          alert("No se pudo borrar el titulo.");
        }
      );
    }
  }

  agregarTitulo(): void {
    if (this.nombreT !== '') {
      this.sTituloService.save(new Titulo(this.nombreT)).subscribe(
        data => {
          this.cargarTitulo(); // Actualiza la lista de títulos
          this.nombreT = ''; // Limpia el valor del campo de texto después de crear el título
          this.isAgree = false; // Cambia el valor de isAgree a false para cerrar el cuadro de diálogo
        }, err => {
          alert("Falló la creación del titulo.");
        }
      );
    } else {
      alert('Ingrese el nombre del título.');
    }
  }

  cancelarAgregarTitulo(): void {
    this.isAgree = false;
    this.nombreT = '';
  }

}
  
