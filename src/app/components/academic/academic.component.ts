import { Component, OnInit } from '@angular/core';
import { AcademicService } from 'src/app/services/academic.service';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  academic:any = {
    institucion: '',
    titulo: '',
    fecha: '',
    grado: ''
  }

  constructor(private academicService: AcademicService) { }

  ngOnInit() {

  }

  addAcademic(){
    console.log(this.academic);
    this.academicService.createAcademic(this.academic);
   // this.profileService.addProfile(this.profile);
  }

}
