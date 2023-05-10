import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SobreMi } from 'src/app/model/sobre-mi';
import { SSobreMiService } from 'src/app/services/s-sobre-mi.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit{
  sobreMi: SobreMi = null;

  
  constructor(
    private sSobreMiService: SSobreMiService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSobreMiService.detail(id).subscribe(
      data => {
        this.sobreMi = data;
      }, err => {
        alert("Error al modificar texto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSobreMiService.update(id, this.sobreMi).subscribe(
      data => {
        console.log(id);
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar texto");
        this.router.navigate(['']);
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }
}
