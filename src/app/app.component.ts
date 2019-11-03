import { Component } from '@angular/core';
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBIEOKV1CT5WYQ05DBR00n_hn9XYc4xB-M",
  authDomain: "angular-library-53894.firebaseapp.com",
  databaseURL: "https://angular-library-53894.firebaseio.com",
  projectId: "angular-library-53894",
  storageBucket: "angular-library-53894.appspot.com",
  messagingSenderId: "717089914812",
  appId: "1:717089914812:web:d7da0008edebe018cc35b9",
  measurementId: "G-0VJVJF1H2J"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    
    // firebase.initializeApp(firebaseConfig);
    
  }
}

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
