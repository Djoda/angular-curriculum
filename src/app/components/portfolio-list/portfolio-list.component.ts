import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})
export class PortfolioListComponent implements OnInit {

  lista:any[] = [
    {titulo: 'Trabajo en Xpertic.com', descripcion: 'Trabajo realizado con Jss', url: 'https://xpertic.com.srl', image:'algo.jpg'},
    {titulo: 'Trabajo en Xpertic.com', descripcion: 'Trabajo realizado con Jss', url: 'https://xpertic.com.srl', image:'algo.jpg'},
    {titulo: 'Trabajo en Xpertic.com', descripcion: 'Trabajo realizado con Jss', url: 'https://xpertic.com.srl', image:'algo.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
