import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

export interface Academica {
  institucion: string;
  titulo: string;
  fecha: string;
  grado: string;
 }

@Injectable({
  providedIn: 'root'
})
export class AcademicService {
  formacionAcademica: Observable<any[]>;

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  readAcademic(){
    return this.firestore.collection('formacionAcademica').snapshotChanges();
  }

  createAcademic(record: Academica){
    return this.firestore.collection('formacionAcademica').add(record);
    //this.db.list('profile').push(record);
  }

}
