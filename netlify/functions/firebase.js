const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyBu40DMlmAC5peRjx9hj2fegGKZ83rE7LQ",
    authDomain: "kiei-451-c63f9.firebaseapp.com",
    projectId: "kiei-451-c63f9",
    storageBucket: "kiei-451-c63f9.appspot.com",
    messagingSenderId: "690132812874",
    appId: "1:690132812874:web:2b0424e32419dd114d12b3"
} 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase