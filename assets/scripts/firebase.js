 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyDSWN5AUH4SdFZlXDPxWBtMhoZWVGbzEb0",
   authDomain: "english-2010.firebaseapp.com",
   projectId: "english-2010",
   storageBucket: "english-2010.firebasestorage.app",
   messagingSenderId: "364667872742",
   appId: "1:364667872742:web:66b1093ca10b511cca6227",
   measurementId: "G-MFCRTYK5MF"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);