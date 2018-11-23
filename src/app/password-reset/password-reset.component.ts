import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  email: string;
  authenticationError: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  ngOnInit() {
  }


  resetPassword() {
    this.afAuth.auth.sendPasswordResetEmail(this.email)
      .then(res => {
        this.router.navigate(['/login']);
      })
      .catch(error => {
        this.authenticationError = true;
      });
  }
}
