import {
  SOMETHING_WENT_WRONG,
  POST_NEW_ADDRESS_SUCCES_MESSAGE,
  ORDER_PLACED_SUCCES_MESSAGE,
  ADDRESS_DELETED_SUCCESSFULLY,
} from "./constants/appConstants";
import {
  Db,
  FireStoreProductCollection,
  FireStoreAddressCollection,
  FireStoreOrdersCollection,
} from "./firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Address, OrderDto } from "./interfaces/store";

const productCollectionRef = collection(Db, FireStoreProductCollection);
const addressCollectionRef = collection(Db, FireStoreAddressCollection);

export const getAllProducts = new Promise((res, rej) => {
  getDocs(productCollectionRef)
    .then((data) => {
      res({
        data,
        collection: FireStoreProductCollection,
      });
    })
    .catch((e) => {
      rej(e);
    });
});

export const getAllSavedAddresses = new Promise((res, rej) => {
  getDocs(addressCollectionRef)
    .then((data) => {
      res({
        data,
        collection: FireStoreAddressCollection,
      });
    })
    .catch((e) => {
      rej(e);
    });
});

export const postNewAddress = (address: Address) =>
  new Promise((res, rej) => {
    addDoc(collection(Db, FireStoreAddressCollection), address)
      .then(() => {
        res({ success: true, message: POST_NEW_ADDRESS_SUCCES_MESSAGE });
      })
      .catch(() => {
        res({ success: false, message: SOMETHING_WENT_WRONG });
      });
  });

export const placeOrder = (order: OrderDto) =>
  new Promise((res, rej) => {
    addDoc(collection(Db, FireStoreOrdersCollection), order)
      .then(() => {
        res({ success: true, message: ORDER_PLACED_SUCCES_MESSAGE });
      })
      .catch(() => {
        res({ success: false, message: SOMETHING_WENT_WRONG });
      });
  });

export const deleteAnAddress = (id: string) =>
  new Promise((res, rej) => {
    const documentRef = doc(Db, FireStoreAddressCollection, id);
    deleteDoc(documentRef)
      .then(() => {
        res({ success: true, message: ADDRESS_DELETED_SUCCESSFULLY });
      })
      .catch(() => {
        res({ success: false, message: SOMETHING_WENT_WRONG });
      });
  });
