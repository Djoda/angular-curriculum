import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:any = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    ci: '',
    birthday: ''
  }

  constructor(private profileService: ProfileService ) { }

  ngOnInit() {
  }

  addProfile(){
    console.log('AQUI -----------------');
    this.profileService.addProfile(this.profile);    
  }

}
