import {
  Db,
  FireStoreProductCollection,
  FireStoreAddressCollection,
} from "./firebase";
import { getDocs, collection } from "firebase/firestore";

const productCollectionRef = collection(Db, FireStoreProductCollection);
const addressCollectionRef = collection(Db, FireStoreAddressCollection);

export const getAllProducts = new Promise((res, rej) => {
  getDocs(productCollectionRef)
    .then((data) => {
      res({ data, collection: FireStoreProductCollection });
    })
    .catch((e) => {
      rej(e);
    });
});

export const getAllSavedAddresses = new Promise((res, rej) => {
  getDocs(addressCollectionRef)
    .then((data) => {
      res({ data, collection: FireStoreAddressCollection });
    })
    .catch((e) => {
      rej(e);
    });
});
