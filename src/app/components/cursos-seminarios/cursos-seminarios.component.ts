import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-cursos-seminarios',
  templateUrl: './cursos-seminarios.component.html',
  styleUrls: ['./cursos-seminarios.component.css']
})
export class CursosSeminariosComponent implements OnInit {
  course:any = {
    institucion: '',
    nombre: '',
    fecha: '',
    cargaHoraria: ''
  }
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }
  addAcademic(){
    console.log(this.course);
    this.coursesService.createAcademic(this.course);
   // this.profileService.addProfile(this.profile);
  }

}
