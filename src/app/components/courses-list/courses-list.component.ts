import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  lista:any[] = [
    {institucion: 'CESBOL', nombre: 'Cableado estructurado', fecha: '1999-10-05', cargaHoraria:'40'},
    {institucion: 'CESBOL', nombre: 'Cableado estructurado', fecha: '1999-10-05', cargaHoraria:'40'},
    {institucion: 'CESBOL', nombre: 'Cableado estructurado', fecha: '1999-10-05', cargaHoraria:'40'}
  ];
  courses: any;
  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.readAcademic().subscribe(data => {
      this.courses = data.map(e => {
        return {
          id: e.payload.doc.id,
          institucion: e.payload.doc.data()['institucion'],
          nombre: e.payload.doc.data()['nombre'],
          cargaHoraria: e.payload.doc.data()['cargaHoraria'],
          fecha: e.payload.doc.data()['fecha'],
        };
      })
      console.log(this.courses);
    });
  }

}
