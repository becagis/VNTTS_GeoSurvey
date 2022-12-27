// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCg348UzHOEF-7j18xa82thsAkKoP3H3Z0',
  authDomain: 'geosurvey-916a5.firebaseapp.com',
  projectId: 'geosurvey-916a5',
  storageBucket: 'geosurvey-916a5.appspot.com',
  messagingSenderId: '228284040679',
  appId: '1:228284040679:web:4068d06764e164ba4fa942',
  measurementId: 'G-D4M21QXSP6'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

// const analytics = getAnalytics(app)

const db = getDatabase(app)

export { app, auth, db }

// // Initialize Firebase App
// const app = initializeApp(firebaseConfig)
//
// // Initialize Auth
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage)
// })

export default firebaseConfig
