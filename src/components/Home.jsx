import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import kereta from "../assets/kereta.png";
import bala from "../assets/bala.png";

const Home = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const navigate = useNavigate();
  const pindah = () => {
    navigate("/gallery");
  };

  return (
    <div className="pl-8 pt-8 pb-8">
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
      <div className="s:grid sm:grid md:flex md:place-items-center lg:gap-[95px] lg:pt-[30px] md:gap-[70px] md:pt-[20px] sm:gap-[30px] sm:pt-[50px] xs:grid xs:gap-[30px] xs:pt-[30px] s:gap-[25px] s:pt-[30px]">
        <div className="lg:pl-[50px] md:pl-[50px]">
          <div className="font-bold text-gray-800 s:pr-[20px] s:mb-2 xs:mb-2 sm:mb-3 md:mb-6 s:text-[16px] xs:pr-[40px] xs:text-[18px] sm:text-[24px] md:text-[34px] lg:text-[48px] xl:text-[52px]">
            BALAI PERAWATAN PERKERETAAPIAN
          </div>
          <div className="flex font-bold">
            <button
              onClick={pindah}
              className="bg-[#E2CC96] s:py-0.5 s:px-0.5 xs:py-0.5 xs:px-1 sm:py-1 sm:px-2 md:py-2 md:px-4 rounded hover:bg-[#F0C55A] transition s:text-[11px] xs:text-[12px] sm:text-[16px] md:text-[16px] lg:text-[24px] xl:text-[24px]"
            >
              PETA PERSEBARAN SARANA
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <img className="flex lg:w-[900px] md:w-[750px]" src={kereta} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
