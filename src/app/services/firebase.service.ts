// src/app/services/firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { enviornment } from 'src/assets/Enviornment/enviornment';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private db: AngularFireDatabase
  ) {
    console.log('Firebase Config:', enviornment.firebaseconfig);
  }
}
