import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD_0GKGXgOizQrxO-aV0E-1EjBex3GPZM",
    authDomain: "pureheart-162318.firebaseapp.com",
    databaseURL: "https://pureheart-162318.firebaseio.com",
    projectId: "pureheart-162318",
    storageBucket: "pureheart-162318.appspot.com",
    messagingSenderId: "557089075213",
    appId: "1:557089075213:web:5c94897aebd7c75ec26544",
    measurementId: "G-WWC2XG9GNQ"
  };

firebase.initializeApp(firebaseConfig)

// init firestore and auth
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}