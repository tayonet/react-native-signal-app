import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8x12mXi5voQoL8Zl9pID7VtfD9gnAZfo",
  authDomain: "signal-clone2-bfa01.firebaseapp.com",
  projectId: "signal-clone2-bfa01",
  storageBucket: "signal-clone2-bfa01.appspot.com",
  messagingSenderId: "50713582927",
  appId: "1:50713582927:web:9f8589e8172d9bd88e393a",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
