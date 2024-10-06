const firebase = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCsoR_GFjU8E_g7wWKLYZ671vRFXp-Pxw",
    authDomain: "dswfirebase.firebaseapp.com",
    projectId: "dswfirebase",
    storageBucket: "dswfirebase.appspot.com",
    messagingSenderId: "516810205391",
    appId: "1:516810205391:web:db2db18978d09d33f915ba",
    measurementId: "G-NYS16WJF53"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

module.exports = db;
