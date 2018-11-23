import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-quiz',
  templateUrl: './user-quiz.component.html',
  styleUrls: ['./user-quiz.component.css']
})
export class UserQuizComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
  }

  ngOnInit() {
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    }).catch(function(error) {
      // An error happened.
    });
  }
}
