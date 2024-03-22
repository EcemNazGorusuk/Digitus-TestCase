import React from "react";
import avatarWoman from "../../assets/avatarWoman.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons";
import laughImg from "../../assets/laughImg.PNG";

export default function Comment() {
  return (
    <div className="flex justify-center items-center w-full ">
      <div
        className={`w-[640px] min-w-[268px] lg:justify-center relative right-24 md:top-[30px] top-[40px] bg-white border border-gray-300 rounded-2xl shadow-2xl`}
      >
        <div className="flex gap-3 p-4 md:p-7 py-6 mb-6">
          <div className="rounded-full bg-[#e8e6fe] w-[73px] h-[73px] flex items-center justify-center my-2   -mx-2">
            <div className="rounded-full border-2 flex items-center justify-center border-white">
              <img src={avatarWoman} className="w-16 h-16" alt="avatar woman" />
            </div>
          </div>
          <div className="flex-1 bg-[#fafafa] py-4 px-2 mx-2 ">
            <p className="text-[#B2BEC3] justify-center  font-[500] text-base md:text-xl">
              Write something, Merve
            </p>
          </div>
         <div className="flex gap-2">
         <div className="relative top-[110px] right-4">
            <img src={laughImg} className="w-5 h-5 " />
          </div>
          <div className="relative top-[110px] left-2">
          <div className="border-l-2 border-[#2D3436] w-1 h-5 mx-2"></div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}
