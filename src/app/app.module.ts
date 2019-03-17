import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AcademicComponent } from './components/academic/academic.component';
import { AcademicListComponent } from './components/academic-list/academic-list.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { ProfessionalListComponent } from './components/professional-list/professional-list.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { CursosSeminariosComponent } from './components/cursos-seminarios/cursos-seminarios.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { RegisterComponent } from './components/register/register.component';

import { ProfileService } from './services/profile.service';
import { AcademicService } from './services/academic.service';
import { CoursesService } from './services/courses.service';
import { ProfesionalService } from './services/profesional.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    ProfileComponent,
    AcademicComponent,
    AcademicListComponent,
    ProfessionalComponent,
    ProfessionalListComponent,
    PortfolioComponent,
    PortfolioListComponent,
    CursosSeminariosComponent,
    CoursesListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'curriculum'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  providers: [ProfileService, AcademicService, CoursesService, ProfesionalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
