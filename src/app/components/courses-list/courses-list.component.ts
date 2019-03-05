import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
