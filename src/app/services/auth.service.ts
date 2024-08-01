
// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth'; // Use compat version for AngularFireAuth

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   user: any;
//   error: any;

//   constructor(public auth: AngularFireAuth) { }

//   async signup(username: string, email: string, contactNumber: string, password: string) {
//     try {
//       const credential = await this.auth.createUserWithEmailAndPassword(email, password);
//       // You can add additional user information like username and contact number to your Firestore here
//       this.user = credential.user;
//       return this.user; // Return user information
//     } catch (error) {
//       this.error = error;
//       throw error; // Re-throw error to handle it in the component
//     }
//   }

//   async signOut() {
//     await this.auth.signOut();
//     this.user = null;
//   }
//  }

// Running Code 

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Use compat version for AngularFireAuth

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  error: any;

  constructor(public auth: AngularFireAuth) { }

  async signup(username: string, email: string, contactNumber: string, password: string) {
    try {
      const credential = await this.auth.createUserWithEmailAndPassword(email, password);
      // You can add additional user information like username and contact number to your Firestore here
      this.user = credential.user;
      return this.user; // Return user information
    } catch (error) {
      this.error = error;
      throw error; // Re-throw error to handle it in the component
    }
  }

  async signOut() {
    await this.auth.signOut();
    this.user = null;
  }
 }