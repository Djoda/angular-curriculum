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

   profile:any = {
     name: '',
     lastName: '',
     email: '',
     phone: '',
     ci: '',
     birthday: ''
   }

  profiles: any;
  constructor(private profileService: ProfileService ) {

  }

  ngOnInit() {
    this.profileService.readProfiles().subscribe(data => {
      this.profiles = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          lastName: e.payload.doc.data()['lastName'],
          email: e.payload.doc.data()['email'],
        };
      })
      console.log(this.profiles);
    });

  }

  addProfile(){
    console.log(this.profile);
    this.profileService.createProfile(this.profile);
   // this.profileService.addProfile(this.profile);
  }

}
