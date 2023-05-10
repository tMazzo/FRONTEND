import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/model/contacto';
import { SContactoService } from 'src/app/services/s-contacto.service';

@Component({
  selector: 'app-edit-contacto',
  templateUrl: './edit-contacto.component.html',
  styleUrls: ['./edit-contacto.component.css']
})
export class EditContactoComponent implements OnInit{
  contacto: Contacto = null;


  constructor(
    private sContactoService: SContactoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sContactoService.detail(id).subscribe(
      data => {
        this.contacto = data;
      }, err => {
        alert("Error al modificar contacto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sContactoService.update(id, this.contacto).subscribe(
      data => {
        console.log(id);
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar contacto");
        this.router.navigate(['']);
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }
}
