import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-list',
  templateUrl: './academic-list.component.html',
  styleUrls: ['./academic-list.component.css']
})
export class AcademicListComponent implements OnInit {
  user:string;
  lista:any[] = [
    {universidad: 'Universidad Mayor de San Andres', titulo: 'Informatica', fecha: '1999-10-05', grado:'Licenciatura'},
    {universidad: 'Universidad Mayor de San Andres', titulo: 'MBA', fecha: '1999-10-05', grado:'Maestria'},
    {universidad: 'Universidad Mayor de San Andres', titulo: 'Ingenieria Ambiental', fecha: '1999-10-05', grado:'Licenciatura'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
