import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Add doc and setDoc imports

const firebaseConfig = {
  apiKey: "AIzaSyCSJpuhrxrtDrUDQek18EOoCiQ9XS1HPgU",
  authDomain: "project-fair-9e5c2.firebaseapp.com",
  projectId: "project-fair-9e5c2",
  storageBucket: "project-fair-9e5c2.appspot.com",
  messagingSenderId: "445131797100",
  appId: "1:445131797100:web:75bd204b5e4ddaa2c11e49"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const updateUserDatabase = async (user, uid) => {
  if (typeof user !== "object") return;
  const docRef = doc(db, "users", uid);
  await setDoc(docRef, { ...user });
};
const getUserFromDatabase = async ( uid) => {
  const docRef = doc(db, "users", uid);
 const result = await getDoc(docRef);
 if(!result.exists()) return null;
 return result.data();
};

export { app as default, auth, db, updateUserDatabase, getUserFromDatabase };
