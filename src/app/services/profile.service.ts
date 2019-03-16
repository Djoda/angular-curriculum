import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Profile { 
  name: string;
  lastName: string;
  email: string;
  phone: string;
  ci: string;
  birthday: string;
 }

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private profileCollection: AngularFirestoreCollection<Profile>;
  profile: Observable<Profile[]>;

  constructor(private afs: AngularFirestore) {
    this.profileCollection = afs.collection<Profile>('profile');
    this.profile = this.profileCollection.valueChanges();
   }

   listaProfile(){
     return this.profile;
   }
}
