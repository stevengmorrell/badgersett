import Rebase from 're-base';
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
   //add firebase details here
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;