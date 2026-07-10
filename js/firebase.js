import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB070hro6sZXjubw7TgjMDDx-AYPtcZad8",
  authDomain: "room-rent-finder.firebaseapp.com",
  projectId: "room-rent-finder",
  storageBucket: "room-rent-finder.firebasestorage.app",
  messagingSenderId: "828024357609",
  appId: "1:828024357609:web:4585010e1cf36ebbe8a678"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
