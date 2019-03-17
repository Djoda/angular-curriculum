import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from 'src/app/services/profesional.service';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {
  profesional:any = {
    institucion: '',
    fechaInicio: '',
    fechaFin: '',
    funcion: ''
  }
  constructor(private profesionalService: ProfesionalService) { }

  ngOnInit() {
  }

  addAcademic(){
    console.log(this.profesional);
    this.profesionalService.createAcademic(this.profesional);
   // this.profileService.addProfile(this.profile);
  }

}
