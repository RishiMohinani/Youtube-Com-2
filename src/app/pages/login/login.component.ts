
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
// [x: string]: any;
//   loginForm!: FormGroup;
//   errorMessage: string = '';
//   error$!: Observable<any>;

//   constructor(private fb: FormBuilder,
//     private afAuth: AngularFireAuth,
//     private router: Router) {}

//   ngOnInit() {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.pattern('^.{8,}$')]],
//       rememberMe: [false]
//     });
//   }

//   async onLogin() {
//     if (this.loginForm.valid) {
//       const { email, password } = this.loginForm.value;
//       try {
//         await this.afAuth.signInWithEmailAndPassword(email, password);
//         console.log('User logged in successfully');
//         // Redirect the user to another page or perform other actions upon successful login
//         this.router.navigate(['/home']);
//       } catch (error) {
//         console.error('Error logging in:', error);
//         this.errorMessage = 'error.message'; // Display error message to the user
//       }
//     }
//   }

//   // Getters for form controls
//   get email() {
//     return this.loginForm.get('email');
//   }

//   get password() {
//     return this.loginForm.get('password');
//   }
// }

// New Code 


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/state/auth.reducer';
import { Store } from '@ngrx/store';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
[x: string]: any;
  loginForm!: FormGroup;
  errorMessage: string = '';
  error$!: Observable<any>;
  loading: boolean = false; //spinner
  showPassword: boolean = false; //show password eye

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    library: FaIconLibrary,
    private store: Store<{ auth: AuthState }>
  ) {library.addIcons(faEye, faEyeSlash);}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^.{8,}$')]],
      rememberMe: [false]
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      this.loading = true;
      const { email, password } = this.loginForm.value;
      try {
        await this.afAuth.signInWithEmailAndPassword(email, password);
        console.log('User logged in successfully');
        // Redirect the user to another page or perform other actions upon successful login
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error logging in:', error);
        this.errorMessage = 'Unable To Login Wrong Email or Password'; // Display error message to the user
        
      }
      finally {
        this.loading = false;  // Set loading to false
      }
    }
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Getters for form controls
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}

