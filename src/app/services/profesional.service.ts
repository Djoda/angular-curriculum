import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


export interface Profesional {
  institucion: string;
  fechaInicio: string;
  fechaFin: string;
  funcion: string;
 }

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  readAcademic(){
    return this.firestore.collection('experienciaProfesional').snapshotChanges();
  }

  createAcademic(record: Profesional){
    return this.firestore.collection('experienciaProfesional').add(record);
    //this.db.list('profile').push(record);
  }

}
