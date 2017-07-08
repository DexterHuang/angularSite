import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form = undefined
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      'username': [null, Validators.email],
      'password': [null, Validators.required]
    })

  }

  ngOnInit() {
  }
  onSubmit(form) {
    const username = form.username;
    const password = form.password;
    console.log('login in')
    firebase.auth().signInWithEmailAndPassword(username, password).then(e => {
      console.log(e)
    }).catch(e => {
      alert(e.message)
    })
  }
}
