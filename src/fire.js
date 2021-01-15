import firebase from 'firebase'


    const firebaseConfig = {
        apiKey: "AIzaSyAXVUAy69_SMdlc2VQ3_oWN2t98Qy2SWFo",
        authDomain: "facebook-clone-ad62a.firebaseapp.com",
        databaseURL: "https://facebook-clone-ad62a-default-rtdb.firebaseio.com",
        projectId: "facebook-clone-ad62a",
        storageBucket: "facebook-clone-ad62a.appspot.com",
        messagingSenderId: "620306758585",
        appId: "1:620306758585:web:6e5b31592dae92a5c29468",
        measurementId: "G-GS8M89R2DD"
      };


  const fire = firebase.initializeApp(firebaseConfig);
  const db = fire.firestore();
  export default db;