import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authenticationError: boolean;
  email: string;
  password: string;
  googleProvider;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(user => {
          this.router.navigate(['/dashboard']);
        }
      )
      .catch((error) => {
        this.authenticationError = true;
      });
  }

  requestResetPassword() {
    this.router.navigate(['/resetPassword']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  googleLogin() {
    this.afAuth.auth.signInWithPopup(this.googleProvider).then((result) => {
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      this.authenticationError = true;
    });
  }
}
