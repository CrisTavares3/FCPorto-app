import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBsgYFJltacJrvNZkUMWcwCtssXMjQ_ilc",
  authDomain: "second-home-f92ff.firebaseapp.com",
  projectId: "second-home-f92ff",
  storageBucket: "second-home-f92ff.appspot.com",
  messagingSenderId: "990715845802",
  appId: "1:990715845802:web:e0527774964156079d44d3"
};
firebase.initializeApp(firebaseConfig)

firebase.firestore().settings({ experimentalForceLongPolling: true })
const auth = firebase.auth();
const firestore = firebase.firestore();


export { firebase, auth, firestore };
