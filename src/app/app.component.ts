import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = undefined;
  constructor() {
    const config = {
      apiKey: 'AIzaSyBLHMza0LOMlI6sZihVnOK6OUHSOy8whro',
      authDomain: 'testing-project-3f680.firebaseapp.com',
      databaseURL: 'https://testing-project-3f680.firebaseio.com',
      projectId: 'testing-project-3f680',
      storageBucket: 'testing-project-3f680.appspot.com',
      messagingSenderId: '810740263979'
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    })
  }
}
