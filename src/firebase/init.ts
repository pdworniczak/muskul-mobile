import firebase from "firebase";

const devConfig = {
  apiKey: "AIzaSyDWbq-WvMZhvBjrPXVqRxTZaZG4N6YhAu4",
  authDomain: "muskul-dev.firebaseapp.com",
  databaseURL: "https://muskul-dev.firebaseio.com",
  projectId: "muskul-dev",
  storageBucket: "muskul-dev.appspot.com",
  messagingSenderId: "682677280958",
  appId: "1:682677280958:web:618ee1750cdd3f092c3eef"
};

console.log("INIT DEV FIREBASE CONFIG!");

firebase.initializeApp(devConfig);
