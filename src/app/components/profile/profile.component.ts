import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // profile:any = {
  //   name: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   ci: '',
  //   birthday: ''
  // }

  profiles: any;
  constructor(db: AngularFirestore, private profileService: ProfileService ) {
    //this.profile = db.collection('profile').valueChanges();
    this.profileService.listaProfile().subscribe(profile => {
      this.profiles = profile;
      console.log(this.profiles);
    })
   }

  ngOnInit() {
  }

  addProfile(){
    console.log('AQUI -----------------');
   // this.profileService.addProfile(this.profile);    
  }

}
