// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtySIq3gu1UzPJ5iOkq_XE3aBSW0RgmrU",
    authDomain: "netflix-clone-392122.firebaseapp.com",
    projectId: "netflix-clone-392122",
    storageBucket: "netflix-clone-392122.appspot.com",
    messagingSenderId: "1069549036164",
    appId: "1:1069549036164:web:4acae25e980c734c0818d1"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
