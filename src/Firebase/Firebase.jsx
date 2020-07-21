import firebase from 'firebase';



  var firebaseConfig = {
    apiKey: "AIzaSyDUim9O8nOpiqIDPySnKddEgXCEXxRAE6g",
    authDomain: "first-107f9.firebaseapp.com",
    databaseURL: "https://first-107f9.firebaseio.com",
    projectId: "first-107f9",
    storageBucket: "first-107f9.appspot.com",
    messagingSenderId: "637996602845",
    appId: "1:637996602845:web:789703d3ce6f151e775234",
    measurementId: "G-1J1MTBD9TX"
  };

  const fire=firebase.initializeApp(firebaseConfig);

  export default fire;
