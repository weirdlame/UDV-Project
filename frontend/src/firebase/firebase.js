// src/firebase-config.js

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOxap8d_azHhqXq_m59C61EXRKYTf4EIA",
  authDomain: "udv-project-985fc.firebaseapp.com",
  projectId: "udv-project-985fc",
  storageBucket: "udv-project-985fc.firebasestorage.app",
  messagingSenderId: "433832401982",
  appId: "1:433832401982:web:26dcd160452ac1ecd9c56f",
  measurementId: "G-RD4KG6GYH0",
};

const app = initializeApp(firebaseConfig);

export default app;
