// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Observable } from 'rxjs';


// @Component({
//   selector: 'app-signup',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.css'],
  
// })
// export class SignupComponent implements OnInit {
//   Signupform!: FormGroup;
//   errorMessage: string = '';
//   error$!: Observable<any>;

//   constructor(private fb: FormBuilder, private afAuth: AngularFireAuth) {}

//   ngOnInit() {
//     this.Signupform = this.fb.group({
//       username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]{3,15}$')]],
//       email: ['', [Validators.required, Validators.email]],
//       contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       password: ['', [Validators.required, Validators.pattern('^.{8,}$')]]
//     });
//   }

//   async onSubmit() {
//     if (this.Signupform.valid) {
//       const { email, password } = this.Signupform.value;
//       try {
//         await this.afAuth.createUserWithEmailAndPassword(email, password);
//         console.log('User registered successfully');
//         // Redirect the user to another page or perform other actions upon successful registration
//       } catch (error) {
//         console.error('Error registering user:', error);
//         this.errorMessage = 'error.message'; // Display error message to the user
//       }
//     }
//   }

//   // Getters for form controls
//   get username() {
//     return this.Signupform.get('username');
//   }

//   get email() {
//     return this.Signupform.get('email');
//   }

//   get contactNumber() {
//     return this.Signupform.get('contactNumber');
//   }

//   get password() {
//     return this.Signupform.get('password');
//   }
// }

// New Code 

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/state/auth.reducer';
import { Store } from '@ngrx/store';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  
})
export class SignupComponent implements OnInit {
  Signupform!: FormGroup;
  errorMessage: string = '';
  error$!: Observable<any>;
  loading: boolean = false; //spinner
  showPassword: boolean = false; //show password eye
 

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router : Router,
    library: FaIconLibrary,
    private store: Store<{ auth: AuthState }>
  ) {library.addIcons(faEye, faEyeSlash);}

  ngOnInit() {
    this.Signupform = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]{3,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$'), 
      Validators.pattern('^[0-9]{10}$'),
      Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.pattern('^.[a-zA-Z0-9_]{8,}$')]],
    });
  }

  async onSubmit() {
    if (this.Signupform.valid) {
      this.loading = true;  // Set loading to true
      const { email, password } = this.Signupform.value;
      try {
        const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
        console.log('User registered successfully', userCredential);

        const userId = userCredential?.user?.uid;

        // Store additional user data in Firestore
        await this.firestore.collection('users').doc(userId).set({
          username: this.Signupform.value.username,
          email: email,
          contactNumber: this.Signupform.value.contactNumber,
          password: password
          // Add more fields as needed
        });
        
        // Redirect the user to another page or perform other actions upon successful registration
        this.router.navigate(['/login']);

      } catch (error) {
        console.error('Error registering user:', error);
        this.errorMessage = 'error.message'; // Display error message to the user
      } finally {
        this.loading = false;  // Set loading to false
      }
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Getters for form controls
  get username() {
    return this.Signupform.get('username');
  }

  get email() {
    return this.Signupform.get('email');
  }

  get contactNumber() {
    return this.Signupform.get('contactNumber');
  }

  get password() {
    return this.Signupform.get('password');
  }
}
