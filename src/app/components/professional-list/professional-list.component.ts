import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
