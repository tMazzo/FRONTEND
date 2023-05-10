import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsDosService } from 'src/app/services/s-skillsDos.service';

@Component({
  selector: 'app-edit-skills-dos',
  templateUrl: './edit-skills-dos.component.html',
  styleUrls: ['./edit-skills-dos.component.css']
})
export class EditSkillsDosComponent   implements OnInit {
  skills: Skills = null;

  constructor(
    private sSkillsService: SSkillsDosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkillsService.detail(id).subscribe(
      data =>{
        this.skills = data;
      }, err =>{
        alert("Error al modificar skills");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkillsService.update(id, this.skills).subscribe(
      data => {
        console.log(id);
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar skills");
         this.router.navigate(['']);
      }
    )
  }

  cancelar(): void {
    this.router.navigateByUrl('/');
  }

}
