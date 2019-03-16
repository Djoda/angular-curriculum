import { Component, OnInit } from '@angular/core';
import { AcademicService } from 'src/app/services/academic.service';

@Component({
  selector: 'app-academic-list',
  templateUrl: './academic-list.component.html',
  styleUrls: ['./academic-list.component.css']
})
export class AcademicListComponent implements OnInit {
  academics: any;
  lista:any[] = [
    {universidad: 'Universidad Mayor de San Andres', titulo: 'Informatica', fecha: '1999-10-05', grado:'Licenciatura'},
    {universidad: 'Universidad Mayor de San Andres', titulo: 'MBA', fecha: '1999-10-05', grado:'Maestria'},
    {universidad: 'Universidad Mayor de San Andres', titulo: 'Ingenieria Ambiental', fecha: '1999-10-05', grado:'Licenciatura'}
  ];
  constructor(private academicService: AcademicService) { }

  ngOnInit() {
    this.academicService.readAcademic().subscribe(data => {
      this.academics = data.map(e => {
        return {
          id: e.payload.doc.id,
          institucion: e.payload.doc.data()['institucion'],
          titulo: e.payload.doc.data()['titulo'],
          grado: e.payload.doc.data()['grado'],
          fecha: e.payload.doc.data()['fecha'],
        };
      })
      console.log(this.academics);
    });
  }

}
