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
    this.profileCollection = afs.collection<Profile>('profiles');
    this.profile = this.profileCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Profile;
        const id = a.payload.doc.id;
        return{id, ...data};
      }))
    );
   }

   addProfile(profile: Profile){
     this.profileCollection.add(profile);
   }
}
