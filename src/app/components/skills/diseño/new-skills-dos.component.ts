import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsDosService } from 'src/app/services/s-skillsDos.service';

@Component({
  selector: 'app-new-skills-dos',
  templateUrl: './new-skills-dos.component.html',
  styleUrls: ['./new-skills-dos.component.css']
})
export class NewSkillsDosComponent  implements OnInit {
  nombreS: string = '';
  colorS: string = '#5B5B5B';
  porcentajeS: number = 0;

  constructor(
    private sSkillsService: SSkillsDosService,
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
