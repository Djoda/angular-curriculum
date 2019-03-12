import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if(user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));        
      }else{
        localStorage.setItem('user', null);
      }
    })
   }

  async login(email: string, password: string){
    try{
      await this.afAuth.auth.signInWithEmailAndPassword(email, password)
      this.router.navigate(['profile']);       
    }catch(e){
      alert("Error!" + e.message);
    }
  }

  async logout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  async signUp(email: string, password: string){
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      /* Call the SendVerificaitonMail() function when new user sign 
      up and returns promise */
      console.log('Usuario creado correctamente');
      this.router.navigate(['login']);
      // this.SendVerificationMail();
      // this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
