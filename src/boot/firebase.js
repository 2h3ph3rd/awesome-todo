import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyA4evrZ8nVU60EeM_apjSESVilxjtgwH2g',
  authDomain: 'awesome-todo-3efab.firebaseapp.com',
  databaseURL: 'https://awesome-todo-3efab.firebaseio.com',
  projectId: 'awesome-todo-3efab',
  storageBucket: 'awesome-todo-3efab.appspot.com',
  messagingSenderId: '504588554621',
  appId: '1:504588554621:web:e9e46220ee6b175c667c14',
  measurementId: 'G-5QLRH7CQ7H'
}

let firebaseApp = firebase.initializeApp(firebaseConfig)

let firebaseAuth = firebaseApp.auth()

export { firebaseAuth }
