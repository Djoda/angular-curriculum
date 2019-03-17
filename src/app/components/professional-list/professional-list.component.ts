import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.css']
})
export class ProfessionalListComponent implements OnInit {

  lista:any[] = [
    {institucion: 'EMBOL', fechaInicio: '2001-10-05', fechaFin: '1999-10-05', funcion:'LoremIpsum descripcion'},
    {institucion: 'Xpertic SRL', fechaInicio: '2001-10-05', fechaFin: '1999-10-05', funcion:'LoremIpsum descripcion'},
    {institucion: 'UMSA', fechaInicio: '2001-10-05', fechaFin: '1999-10-05', funcion:'LoremIpsum descripcion'}
  ];
  experiencias: any;
  constructor(private profesionalService: ProfesionalService) { }

  ngOnInit() {

    this.profesionalService.readAcademic().subscribe(data => {
      this.experiencias = data.map(e => {
        return {
          id: e.payload.doc.id,
          institucion: e.payload.doc.data()['institucion'],
          fechaInicio: e.payload.doc.data()['fechaInicio'],
          fechaFin: e.payload.doc.data()['fechaFin'],
          funcion: e.payload.doc.data()['funcion'],
        };
      })
      console.log(this.experiencias);
    });

  }

}
