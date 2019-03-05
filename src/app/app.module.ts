import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    ProfessionalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
