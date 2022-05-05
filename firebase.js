// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjCEL-Q3_r7itrxh0FEFtloqBwY_EQqms",
  authDomain: "fir-practice-538b3.firebaseapp.com",
  databaseURL: "https://fir-practice-538b3-default-rtdb.firebaseio.com",
  projectId: "fir-practice-538b3",
  storageBucket: "fir-practice-538b3.appspot.com",
  messagingSenderId: "241047924876",
  appId: "1:241047924876:web:c22439c843b87df46b8ba9",
  measurementId: "G-26QPR1CEQ5"
};

// Initialize Firebase
let app;
if(firebase.apps.length == 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };