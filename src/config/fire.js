import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBXmcRx05JsQMRTFQcRylNdiWv89Wu0ygM",
    authDomain: "react-firebase-auth-cc5c7.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-cc5c7.firebaseio.com",
    projectId: "react-firebase-auth-cc5c7",
    storageBucket: "react-firebase-auth-cc5c7.appspot.com",
    messagingSenderId: "716312891561",
    appId: "1:716312891561:web:13eb0816e1c3d7f50719b8"
  };

  const fire= firebase.initializeApp(firebaseConfig);

  export default fire;