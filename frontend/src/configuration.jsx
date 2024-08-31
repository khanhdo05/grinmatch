// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAEITjJkfhXe1p-03LIaQntfGWeAylvAZk',
    authDomain: 'grinmatch-f46fc.firebaseapp.com',
    databaseURL: 'https://grinmatch-f46fc-default-rtdb.firebaseio.com',
    projectId: 'grinmatch-f46fc',
    storageBucket: 'grinmatch-f46fc.appspot.com',
    messagingSenderId: '493838050309',
    appId: '1:493838050309:web:55590203d4825afb8de86c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)

export { auth, firestore }
