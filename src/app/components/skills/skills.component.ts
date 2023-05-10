import { Component, OnInit } from '@angular/core';
import { ImportScriptService } from './../../services/import-script.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Skills } from 'src/app/model/skills';
import { TokenService } from 'src/app/services/token.service';
import { SSkillsService } from 'src/app/services/s-skills.service';
import { SSkillsDosService } from 'src/app/services/s-skillsDos.service';
import { SSkillsTresService } from 'src/app/services/s-skills-tres.service';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class SkillsComponent implements OnInit {
  skills: Skills[] = [];
  skillsDos: Skills[] = [];
  skillsTres: Skills[] = [];
  isLogged = false;

  constructor(
    private sSkillsService: SSkillsService,
    private sSkillsDosService: SSkillsDosService,
    private sSkillsTresService: SSkillsTresService,
    private tokenService: TokenService,
    
    // Importar JS personalizado 
    private _ImportScript:ImportScriptService
    ){
    _ImportScript.cargar(["skills"]);
  }
  ngOnInit(): void {
    this.cargarSkills(this.sSkillsService);
    this.cargarSkills(this.sSkillsDosService);
    this.cargarSkills(this.sSkillsTresService);
    
    this.isLogged = !!this.tokenService.getToken(); // utilizando !! para convertir el valor en un booleano
  }

  // CARGAR DATOS
  async cargarSkills(service: any): Promise<void> {
    try {
      const data = await service.lista().toPromise();
      if (service === this.sSkillsService) {
        this.skills = data;
      } else if (service === this.sSkillsDosService) {
        this.skillsDos = data;
      } else if (service === this.sSkillsTresService) {
        this.skillsTres = data;
      }
    } catch (error) {
      console.error('Error al cargar los skills', error);
      // Mostrar mensaje de error al usuario
    }
  }
  


  // BORRAR DATOS
  delete(id?: number): void {
    if (id != undefined) {
      const index = this.skills.findIndex(e => e.id === id);
      this.sSkillsService.delete(id).subscribe(
        data => {
          this.skills.splice(index, 1);

        }, err => {
          alert("No se pudo borrar el skill.");
        }
      );
    }
  }

  deleteDos(id?: number): void {
    if (id != undefined) {
      const index = this.skillsDos.findIndex(e => e.id === id);
      this.sSkillsDosService.delete(id).subscribe(
        data => {
          this.skillsDos.splice(index, 1);

        }, err => {
          alert("No se pudo borrar el skill.");
        }
      );
    }
  }

  deleteTres(id?: number): void {
    if (id != undefined) {
      const index = this.skillsTres.findIndex(e => e.id === id);
      this.sSkillsTresService.delete(id).subscribe(
        data => {
          this.skillsTres.splice(index, 1);

        }, err => {
          alert("No se pudo borrar el skill.");
        }
      );
    }
  }


  content = 1;
  show = true;

  showContent(num: number) {
    this.content = num;
  }

}