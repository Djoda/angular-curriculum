import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AcademicComponent } from './components/academic/academic.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CursosSeminariosComponent } from './components/cursos-seminarios/cursos-seminarios.component';
import { RegisterComponent } from './components/register/register.component';
  import { from } from 'rxjs';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'academic', component: AcademicComponent},
  { path: 'professional', component: ProfessionalComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'courses', component: CursosSeminariosComponent},
  { path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
