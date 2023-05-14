import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SobreMi } from 'src/app/model/sobre-mi';
import { SSobreMiService } from 'src/app/services/s-sobre-mi.service';

@Component({
  selector: 'app-new-acerca-de',
  templateUrl: './new-acerca-de.component.html',
  styleUrls: ['./new-acerca-de.component.css']
})
export class NewAcercaDeComponent {
  textoSM: string = '';


  constructor(private sSobreMiService: SSobreMiService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const sobreMi = new SobreMi(this.textoSM);
    this.sSobreMiService.save(sobreMi).subscribe(
      data => {
        alert("Texto añadido.");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la creación de sobre mí (onCreate())");
        this.router.navigate(['']);
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }

}

