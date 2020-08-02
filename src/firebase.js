import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA7spKlCXa6vugIhSalv8Rxx3zpYPwvBHo",
    authDomain: "clone-75b5d.firebaseapp.com",
    databaseURL: "https://clone-75b5d.firebaseio.com",
    projectId: "clone-75b5d",
    storageBucket: "clone-75b5d.appspot.com",
    messagingSenderId: "364744629989",
    appId: "1:364744629989:web:4a90c1661578d995a3be0c"
  });

  const auth = firebase.auth();

  export { auth }