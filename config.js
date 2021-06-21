import firebase from 'firebase';
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyAhuLgbv82onT7jXl_M2U1-6xZjPKTGSTM",
    authDomain: "newsletter-288d6.firebaseapp.com",
    databaseURL: "https://newsletter-288d6-default-rtdb.firebaseio.com",
    projectId: "newsletter-288d6",
    storageBucket: "newsletter-288d6.appspot.com",
    messagingSenderId: "26115235117",
    appId: "1:26115235117:web:957b5e0acca3ff958107a4"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
