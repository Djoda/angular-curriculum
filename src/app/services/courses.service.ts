import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

export interface Courses {
  institucion: string;
  nombre: string;
  fecha: string;
  cargaHoraria: string;
 }

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  formacionAcademica: Observable<any[]>;  
  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  readAcademic(){
    return this.firestore.collection('cursos').snapshotChanges();
  }

  createAcademic(record: Courses){
    return this.firestore.collection('cursos').add(record);
    //this.db.list('profile').push(record);
  }

}
