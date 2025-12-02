// Firebase V8 configuration (compatible with your HTML setup)

var firebaseConfig = {
  apiKey: "AIzaSyAqJ8aESVdpUY0SysMiBP5etk6EA9bUzPk",
  authDomain: "print-kiosk-7e521.firebaseapp.com",
  projectId: "print-kiosk-7e521",
  storageBucket: "print-kiosk-7e521.appspot.com",
  messagingSenderId: "456837299454",
  appId: "1:456837299454:web:948789989c8ce5ac54b9af"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const storage = firebase.storage();
const db = firebase.firestore();
