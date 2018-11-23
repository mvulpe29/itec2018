import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  authenticationError: boolean;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  register() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.authenticationError = true;
      });
  }


}
