import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export const addData = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      data: data,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getData = async (slug) => {
  const docRef = doc(db, "posts", slug);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const updateData = async (data, slug) => {
  const docRef = doc(db, "posts", slug);
  console.log(docRef.id);

  try {
    // Belgeyi güncelle
    await updateDoc(docRef, {
      data: data,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
