import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsTresService } from 'src/app/services/s-skills-tres.service';

@Component({
  selector: 'app-new-skills-tres',
  templateUrl: './new-skills-tres.component.html',
  styleUrls: ['./new-skills-tres.component.css']
})
export class NewSkillsTresComponent  implements OnInit {
  nombreS: string = '';
  colorS: string = '#5B5B5B';
  porcentajeS: number = 0;

  constructor(
    private sSkillsService: SSkillsTresService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const expe = new Skills(this.nombreS ,this.colorS, this.porcentajeS);
    this.sSkillsService.save(expe).subscribe(
      data => {
        alert("skill añadida.");
        this.router.navigate(['']);
      }, err => {
        alert("Falló la creación de skill (onCreate())");
        this.router.navigateByUrl('/'); // Navega a la página de inicio
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }
}
