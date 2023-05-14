import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/services/image.service';
import { SProyectoService } from 'src/app/services/s-proyecto.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(
    private sProyectoService: SProyectoService,
    private activatedRouter: ActivatedRoute,
    public imageService: ImageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectoService.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectoService.update(id, this.proyecto).subscribe(
      data => {
        console.log(id);
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar proyecto");
         this.router.navigate(['']);
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }
}