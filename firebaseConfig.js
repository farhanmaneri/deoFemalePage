import firebase from 'firebase/app';
import 'firebase/firestore'; // Import any additional Firebase services you need

const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyC5PtZCFdxdGjnShUAHyYARvbC7_VExXcU",
  authDomain: "web3assignment3rd.firebaseapp.com",
  databaseURL: "https://web3assignment3rd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web3assignment3rd",
  storageBucket: "web3assignment3rd.appspot.com",
  messagingSenderId: "1002693110182",
  appId: "1:1002693110182:web:5ad3f7fd32d25912768767",
  measurementId: "G-64Y67KWRFR"
};


// Initialize Firebase
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }


export default firebaseConfig;
