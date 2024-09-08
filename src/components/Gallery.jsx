import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

const Gallery = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await listAll(imagesListRef);
        const urls = await Promise.all(
          response.items.map((item) => getDownloadURL(item))
        );
        setImageUrls(urls);
      } catch (error) {
        console.error("Error fetching images: ", error);
        alert("Failed to fetch images. Please try again.");
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-center font-bold text-gray-800 mb-6 s:text-[18px] sm:text-[22px] md:text-[26px] lg:text-[34px] xl:text-[44px]">
        PETA PERSEBARAN SARANA
      </h1>
      <div className="mt-8 grid grid-cols-1 gap-4">
        {imageUrls.map((url) => (
          <div key={url} className="flex justify-center items-center">
            <img
              src={url}
              alt="Uploaded"
              className="rounded shadow-lg lg:w-[1000px] lg:h-[500px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
