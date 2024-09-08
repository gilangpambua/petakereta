import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const navigate = useNavigate();
  const pindah = () => {
    navigate("/gallery");
  };

  // const uploadFile = () => {
  //   if (imageUpload == null) {
  //     alert("Please select an image to upload.");
  //     return;
  //   }

  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload)
  //     .then((snapshot) => {
  //       getDownloadURL(snapshot.ref).then((url) => {
  //         alert("Image uploaded successfully!");
  //         navigate("/gallery");
  //       });
  //     })
  //     .catch(() => {
  //       alert("Failed to upload image. Please try again.");
  //     });
  // };

  return (
    <div className="p-8 grid place-items-center py-[200px]">
      <div>
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          BALAI PERAWATAN PERKERETAAPIAN
        </h1>
      </div>
      {/* <div className="flex flex-col items-center">
        <input
          type="file"
          onChange={(event) => setImageUpload(event.target.files[0])}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={uploadFile}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Upload Image
        </button>
      </div> */}
      <div className="flex justify-center text-center text-3xl font-bold">
        <button
          onClick={pindah}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          PETA PERSEBARAN SARANA
        </button>
      </div>
    </div>
  );
};

export default Home;
