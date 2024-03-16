// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./configs/firebase.json";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Db = getFirestore(app);
export const Storage = getStorage(app);
export const Analytics = getAnalytics(app);

export const FireStoreProductCollection = "products";
export const FireStoreAddressCollection = "address";
