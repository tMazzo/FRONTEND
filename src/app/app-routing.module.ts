import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './components/estudios-exp/exp/new-experiencia.component';
import { EditExperienciaComponent } from './components/estudios-exp/exp/edit-experiencia.component';
import { NewEducacionComponent } from './components/estudios-exp/estudios/new-educacion.component';
import { EditEducacionComponent } from './components/estudios-exp/estudios/edit-educacion.component';
import { EditPerfilComponent } from './components/inicio/perfil/edit-perfil.component';
import { EditContactoComponent } from './components/inicio/contacto/edit-contacto.component';
import { EditAcercaDeComponent } from './components/sobre-mi/edit-acerca-de/edit-acerca-de.component';
import { NewSkillsComponent } from './components/skills/Programacion/new-skills.component';
import { EditSkillsComponent } from './components/skills/Programacion/edit-skills.component';
import { EditSkillsDosComponent } from './components/skills/diseño/edit-skills-dos.component';
import { NewSkillsDosComponent } from './components/skills/diseño/new-skills-dos.component';
import { NewSkillsTresComponent } from './components/skills/office/new-skills-tres.component';
import { EditSkillsTresComponent } from './components/skills/office/edit-skills-tres.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewAcercaDeComponent } from './components/sobre-mi/edit-acerca-de/new-acerca-de.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'editperfil/:id', component: EditPerfilComponent},
  {path: 'editcontacto/:id', component: EditContactoComponent},
  {path: 'editsobremi/:id', component: EditAcercaDeComponent},
  {path: 'nuevosobremi', component: NewAcercaDeComponent},
  {path: 'nuevaskill', component: NewSkillsComponent},
  {path: 'editskill/:id', component: EditSkillsComponent},
  {path: 'nuevaskillDos', component: NewSkillsDosComponent},
  {path: 'editskillDos/:id', component: EditSkillsDosComponent},
  {path: 'nuevaskillTres', component: NewSkillsTresComponent},
  {path: 'editskillTres/:id', component: EditSkillsTresComponent},
  {path: 'nuevoproyecto', component: NewProyectosComponent},
  {path: 'editproyecto/:id', component: EditProyectosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
