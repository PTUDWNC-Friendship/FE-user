import * as firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwtMSbMiAxLOcdlGrG2ojWVr3rhAAiXRM",
  authDomain: "findtutor-756b7.firebaseapp.com",
  databaseURL: "https://findtutor-756b7.firebaseio.com",
  projectId: "findtutor-756b7",
  storageBucket: "findtutor-756b7.appspot.com",
  messagingSenderId: "688817773049",
  appId: "1:688817773049:web:5ee3d9551e17274f828528",
  measurementId: "G-1R21M72H6L"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const f = firebase;
  // Get a reference to the storage service, which is used to create references in your storage bucket
  export const storage = firebase.storage();
  // Create a storage reference from our storage service
  export const storageRef = storage.ref();
  export const database = firebase.firestore();
  