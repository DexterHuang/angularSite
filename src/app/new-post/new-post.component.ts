import { Post } from './../Model/Post';
import { MathHelper } from './../Utility/MathHelper';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng2FileDropAcceptedFile, Ng2FileDropRejectedFile } from 'ng2-file-drop'
import * as firebase from 'firebase';
import UUID from 'core-js'
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  description = '';
  title = '';
  titleAlert = 'this field id required';
  dropStatus = 'Drop File Here'
  imageFiles = []
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'title': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required,
      Validators.minLength(1), Validators.maxLength(500)])]
    })

  }

  private upload() {
    console.log('Uploading..')
    const promises = [];
    const uuid: string = MathHelper.getRandomUUID();

    const post: Post = new Post();
    post.title = this.title;
    post.description = this.description;
    this.imageFiles.forEach(file => {
      promises.push(firebase.storage().ref('images/' + uuid).put(file.file))
    });
    Promise.all(promises).then(e => {
      e.forEach(ee => {
        post.imageUrls.push(ee.downloadURL);
      })
      firebase.database().ref('posts/').push().set(post).then(() => {
        alert('yey!!')
      });
    })




  }
  addPost(post) {
    this.description = post.description;
    this.title = post.title;
    this.upload();
  }

  ngOnInit() {
  }

  // File being dragged has moved into the drop region
  private dragFileOverStart(event) {
  }

  // File being dragged has moved out of the drop region
  private dragFileOverEnd(event) {
  }

  // File being dragged has been dropped and is valid
  private dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
    const file: File = acceptedFile.file;
    if (file.type.indexOf('image') >= 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.dropStatus = 'Drop File Here';
        // this.upload(file);
        this.imageFiles.push({
          url: fileReader.result,
          file: file
        });
      };
      fileReader.readAsDataURL(file)
      this.dropStatus = 'Pls wait, im processing your shit';
    } else {
      this.dropStatus = 'File Must Be An Image'
    }
  }

  // File being dragged has been dropped and has been rejected
  private dragFileRejected(rejectedFile: Ng2FileDropRejectedFile) {
  }
}
