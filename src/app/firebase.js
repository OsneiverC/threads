import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj8V1vWyO0l5UPPcErkeGAW3Mmx11mxII",
  authDomain: "therads-67cfb.firebaseapp.com",
  projectId: "therads-67cfb",
  storageBucket: "therads-67cfb.appspot.com",
  messagingSenderId: "550388256862",
  appId: "1:550388256862:web:d42ebb1c3172c1e52724cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export function initGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export async function crearPost(message) {
  const docRef = doc(collection(db, "posts"));

  await setDoc(docRef, {
    message,
  });

  const postId = docRef.id;

  const nuevoPost = doc(db, "posts", postId);
  const docSnap = await getDoc(nuevoPost);

  return docSnap.data();
}

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const results = [];
  querySnapshot.forEach((doc) => {
    results.push(doc.data());
  });

  return results;
};
