import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDLjXox2BBmOp_RRjVaSKfpGA7QFZI_0rQ',
  authDomain: 'fir-crud-94681.firebaseapp.com',
  projectId: 'fir-crud-94681',
  storageBucket: 'fir-crud-94681.appspot.com',
  messagingSenderId: '456468945866',
  appId: '1:456468945866:web:d6954e993d07b4f3aecd33',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const signInEmailPass = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutFunc = (auth) => {
  return signOut(auth);
};
