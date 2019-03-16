import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
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
  profile: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }
  //  getProfiles(){
  //    console.log("-------------------------------------------");
  //   this.db.list('profile').valueChanges();
  // }

  readProfiles(){
    return this.firestore.collection('profile').snapshotChanges();
  }

  createProfile(record: Profile){
    return this.firestore.collection('profile').add(record);
  }

}
