import Rebase from 're-base';
// React/Firebase specific package
import firebase from 'firebase'
// Official Firebase package

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyBPOpIiFDX405-yggA9J34eNQqXf2qtIA8",
   authDomain: "badgersett-edda7.firebaseapp.com",
   databaseURL: "https://badgersett-edda7.firebaseio.com",
   projectId: "badgersett-edda7",
   storageBucket: "badgersett-edda7.appspot.com",
   messagingSenderId: "349308061349",
   appId: "1:349308061349:web:f0b30ed803fd10039baf4c",
   measurementId: "G-WFK6YXKP92"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;