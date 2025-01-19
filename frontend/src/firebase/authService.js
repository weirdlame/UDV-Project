import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

// Получаем конфигурацию из переменных окружения
const firebaseConfig = {
  apiKey: "AIzaSyCOxap8d_azHhqXq_m59C61EXRKYTf4EIA",
  authDomain: "udv-project-985fc.firebaseapp.com",
  projectId: "udv-project-985fc",
  storageBucket: "udv-project-985fc.firebasestorage.app",
  messagingSenderId: "433832401982",
  appId: "1:433832401982:web:26dcd160452ac1ecd9c56f",
  measurementId: "G-RD4KG6GYH0",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Получаем объект auth
const auth = getAuth(app);

// Функции для работы с аутентификацией
export const registerUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};

// Пример использования отслеживания состояния пользователя
export const trackAuthState = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
