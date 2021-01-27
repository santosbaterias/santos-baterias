import firebase from "firebase";

export const url = "https://5fd7aec49dd0db0017ee9950.mockapi.io/api/bateria/";

export const firebaseConfig = {
    apiKey: "AIzaSyAvjGOvtQFoAdzFnIYy-mX5dFtkPav5OGU",
    authDomain: "santos-baterias-dd2df.firebaseapp.com",
    projectId: "santos-baterias-dd2df",
    storageBucket: "santos-baterias-dd2df.appspot.com",
    messagingSenderId: "299174341340",
    appId: "1:299174341340:web:54fe826d0c8f2aca876219"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();