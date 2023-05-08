// CONEXION A FIREBASE
import firebase from 'firebase/app';
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBptn4IGoNS-UkJaYlTcBaU-ylnho72uw",
  authDomain: "plant-3cb30.firebaseapp.com",
  projectId: "plant-3cb30",
  storageBucket: "plant-3cb30.appspot.com",
  messagingSenderId: "766897400818",
  appId: "1:766897400818:web:e33ea0e3e18a935abf596b",
  measurementId: "G-4S4WM2X1BT"
};

// inicializamos la app:
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = ()=>  {
    return firebase.firestore(app)
}