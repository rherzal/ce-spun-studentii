// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCoS-q_rga3axs7gFpr6bdtkdfqoebczo0',
  authDomain: 'osut-divertisment.firebaseapp.com',
  databaseURL:
    'https://osut-divertisment-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'osut-divertisment',
  storageBucket: 'osut-divertisment.appspot.com',
  messagingSenderId: '219304656262',
  appId: '1:219304656262:web:d55d4ec98fff1de0bc0007',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getDatabase();