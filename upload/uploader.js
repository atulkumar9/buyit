const admin = require("firebase-admin");
const serviceAccount = require("../src/configs/service_key.json"); // Path to your service account key file
const { v4: uuidv4 } = require("uuid");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const collectionName = "address"; // Name of the collection you want to upload documents to
const documents = require("./address-data.json");

async function uploadDocuments() {
  try {
    for (const docData of documents) {
      docData.id = uuidv4();
      await firestore.collection(collectionName).add(docData);
    }
    console.log("Documents uploaded successfully.");
  } catch (error) {
    console.error("Error uploading documents:", error);
  } finally {
    admin.app().delete();
  }
}

uploadDocuments();
