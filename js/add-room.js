import { storage, db } from "./firebase.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.addRoom = async function () {
  try {
    const owner = document.getElementById("owner").value.trim();
    const location = document.getElementById("location").value.trim();
    const rent = document.getElementById("rent").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const image = document.getElementById("image").files[0];

    if (!owner || !location || !rent || !mobile || !image) {
      alert("Please fill all details.");
      return;
    }

    const imageRef = ref(storage, "rooms/" + Date.now() + "-" + image.name);

    await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(imageRef);

    await addDoc(collection(db, "rooms"), {
      owner,
      location,
      rent,
      mobile,
      imageUrl
    });

    alert("Room Added Successfully!");

  } catch (err) {
    alert(err.message);
    console.error(err);
  }
};
<script type="module" src="js/add-room.js"></script>
