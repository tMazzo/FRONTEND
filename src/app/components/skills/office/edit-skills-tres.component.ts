import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsTresService } from 'src/app/services/s-skills-tres.service';

@Component({
  selector: 'app-edit-skills-tres',
  templateUrl: './edit-skills-tres.component.html',
  styleUrls: ['./edit-skills-tres.component.css']
})
export class EditSkillsTresComponent   implements OnInit {
  skills: Skills = null;

  constructor(
    private sSkillsService: SSkillsTresService,
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
