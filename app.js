  const firebaseConfig = {
    apiKey: "AIzaSyASzZgiwHR6ygOGEJUC_9m9b_FyrT4etx4",
    authDomain: "club-2968b.firebaseapp.com",
    projectId: "club-2968b",
    storageBucket: "club-2968b.firebasestorage.app",
    messagingSenderId: "892412310616",
    appId: "1:892412310616:web:9ded9c4ee90ddf5cb7462d",
    measurementId: "G-CFD24CJG1L"
  };

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PASTE_YOURS",
  authDomain: "PASTE_YOURS",
  projectId: "PASTE_YOURS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// REGISTER
window.register = async function(){
const email=document.getElementById("regEmail").value;
const pass=document.getElementById("regPass").value;
await createUserWithEmailAndPassword(auth,email,pass);
alert("Registered!");
}

// LOGIN
window.login = async function(){
const email=document.getElementById("logEmail").value;
const pass=document.getElementById("logPass").value;
await signInWithEmailAndPassword(auth,email,pass);
window.location.href="dashboard.html";
}

// LOGOUT
window.logout = async function(){
await signOut(auth);
window.location.href="index.html";
}

// EVENT REGISTER
window.registerEvent = async function(){
const event=document.getElementById("eventName").value;
await addDoc(collection(db,"events"),{
eventName:event,
user:auth.currentUser.email
});
alert("Event Registered!");
}