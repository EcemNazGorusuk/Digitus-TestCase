import React from "react";
import doctorImg from "../../assets/doctorImg2.png";
import womanImg3 from "../../assets/womanImg3.png";
import womanImg4 from "../../assets/womanImg4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Members() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full -mt-24">
      <div
        className={`flex px-3 justify-between h-[388px] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-xl w-[640px] min-w-[268px] lg:justify-between relative right-24 md:top-[30px] top-[40px] bg-[#DFE6E9] border-gray-300 shadow-2xl`}
      >
        <div className="absolute top-[180px] -right-3 z-50 bg-white text-white p-2 w-6 rounded-full h-6">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-gray-400 relative bottom-2"
          />
        </div>
        <div className="absolute top-[180px] -left-3 z-50 bg-white text-white p-2 w-6 rounded-full h-6"></div>

        <div className="flex py-4 gap-4 text-center">
          <div className="text-[#636E72] relative left-[210px] text-[18px] font-inter font-[400] leading-[21.78px]">
            Members You May Know
          </div>
          <div className="text-[#2D3436] top-1 relative left-[335px] font-inter font-[400] text-[14px] leading-[16.94px]">
            SEE ALL
          </div>
        </div>

        <div className="flex gap-4 absolute top-20 left-0 right-0 justify-center">
          <div className="relative w-[190px] h-[280px] bg-white border border-gray-300 rounded-[15px] flex flex-col items-center justify-center shadow-card">
            <button className="absolute top-2 right-3 p-1 text-[#707070] cross"></button>
            <div className="relative flex flex-col items-center">
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10"></div>
              <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center z-10"></div>
              <div className="relative  flex flex-col items-center  py-5">
                <div
                  className={`rounded-full w-[75px] h-[75px] flex items-center justify-center border border-white rounded-border-gradient`}
                >
                  <div className="rounded-full border-2 flex items-center justify-center border-white">
                    <img
                      src={doctorImg}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </div>
                  <div className="leading-[18px] font-[400] text-[18px] relative top-4 text-center">
                    Ahmet Yılmaz
                  </div>

                  <div className="leading-[18px] font-[400] text-[18px] relative top-5  text-[#FDCB6E]">
                    Medical Doctor
                  </div>
                <div className="leading-[18px] font-[400]  mb-14 relative top-6 text-black font-roboto text-[14px]">
                  İzmir
                </div>
                <div className="leading-[18px] font-[400] pb-4 ">
                  <button className="bg-[#fdcb6e] text-white px-4 py-1 rounded-full text-center items-center w-[120px] h-[30px]">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[190px] h-[280px] bg-white border border-gray-300 rounded-[15px] flex flex-col items-center justify-center shadow-card">
            <button className="absolute top-2 right-3 p-1 text-[#707070] cross"></button>
            <div className="relative flex flex-col items-center">
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10"></div>
              <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center z-10"></div>
              <div className="relative  flex flex-col items-center">
                <div
                  className={`rounded-full w-[75px] h-[75px] flex items-center justify-center  `}
                >
                  <div className="rounded-full border-2 flex items-center justify-center border-white">
                    <img
                      src={womanImg3}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="py-4">
                  <div className="leading-[18px] font-[400] text-[18px] mb-2 text-center">
                    Melike Kadıoğlu
                  </div>

                  <div className="leading-[18px] font-[400] text-[18px]  text-[#FDCB6E]"></div>
                </div>
                <div className="leading-[18px] font-[400]  mb-8 text-black font-roboto text-[14px]">
                  İstanbul
                </div>
                <div className="leading-[18px] font-[400] pb-4 ">
                  <button className="bg-[#a29bfc] text-white px-4 py-1 rounded-full text-center items-center w-[120px] h-[30px]">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[190px] h-[280px] bg-white  border-gray-300 rounded-[15px] flex flex-col items-center justify-center shadow-card">
            <button className="absolute top-2 right-3 p-1 text-[#707070] cross"></button>
            <div className="relative flex flex-col items-center">
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10"></div>
              <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center z-10"></div>
              <div className="relative  flex flex-col items-center">
                <div
                  className={`rounded-full w-[75px] h-[75px] flex items-center justify-center `}
                >
                  <div className="rounded-full border-2 flex items-center justify-center border-white">
                    <img
                      src={womanImg4}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="py-4">
                  <div className="leading-[18px] font-[400] text-[18px] mb-2 text-center">
                    Ayşe Yıldırım
                  </div>

                  <div className="leading-[18px] font-[400] text-[18px]  text-[#FDCB6E]"></div>
                </div>
                <div className="leading-[18px] font-[400]  mb-8 text-black font-roboto text-[14px]">
                  Isparta
                </div>
                <div className="leading-[18px] font-[400] pb-4 ">
                  <button className="bg-[#a29bfc] text-white px-4 py-1 rounded-full text-center items-center w-[120px] h-[30px]">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
