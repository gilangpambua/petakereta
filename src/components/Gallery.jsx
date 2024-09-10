import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import logo from "../assets/Logo.png";
import kereta from "../assets/kereta.png";
import bala from "../assets/bala.png";

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
    <div className="min-h-screen p-8">
      <div className="flex gap-[20px]">
        <div>
          <a href="/">
            <img
              className="lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] xs:w-[30px] xs:h-[30px] s:w-[30px] s:h-[30px]"
              src={logo}
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="/">
            <img
              className="lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] xs:w-[30px] xs:h-[30px] s:w-[30px] s:h-[30px]"
              src={bala}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="s:pt-[15px] xs:pt-[20px] sm:pt-[25px] grid justify-center">
        <div className="font-bold text-gray-800 s:text-[16px] xs:text-[18px] sm:text-[24px] md:text-[34px] lg:text-[48px] xl:text-[52px]">
          PETA PERSEBARAN SARANA
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 s:mt-[10px] xs:mt-[10px] sm:mt-[15px] md:mt-[20px] lg:mt-[25px] xl:mt-[30px]">
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
