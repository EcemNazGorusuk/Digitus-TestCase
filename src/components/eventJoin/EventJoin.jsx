import React from "react";

export default function EventJoin({
  img,
  title,
  hasUserImage,
  contentImg,
  isGradient,
  hasGradient,
}) {
  return (
    <div className="right-content-ui flex flex-col items-center w-full h-full mt-14">
      <div className="user-info flex items-center px-1 justify-start h-24 w-56 bg-white border-gray-300 shadow-2xl rounded-tl-lg rounded-tr-lg">
        <div className="content-image w-10 h-10 relative mr-2">
          {hasUserImage && (
            <img
              src={img}
              alt={title}
              className="rounded-full w-full h-full object-cover"
            />
          )}

          {hasGradient && (
            <div className="rounded-full rounded-border-gradient border-2  w-10 h-10 ">
              <div className="rounded-full bg-white  w-9 h-9 "></div>
            </div>
          )}
        </div>
        <div className=" flex relative top-4 right-5 z-50">
          <div className="text-center text-[20px] ">{title}</div>
        </div>
      </div>

      {isGradient && <div className="border-gradient w-56 h-1"></div>}

      <div className="content-image w-56 h-24 bg-white">
        <div className="content-image w-44 relative left-6 h-24 ">
          <img
            src={contentImg}
            alt="Content"
            className="w-full h-full object-fit"
          />
        </div>
      </div>
      <div className="content-details flex flex-col items-center  bg-white border-gray-300 shadow-2xl rounded-b-lg p-2 w-56">
        <div class="border-[1.7px]  rounded-[14px] border-black">
          <button class="font-inter bg-white font-[400] text-[#2D3436] text-[16px] px-4 py-1 rounded-full text-center items-center w-[120px] h-[30px]">
            Join
          </button>
        </div>
      </div>
      <div className="flex relative gap-3 py-5 items-center">
      <div className="w-[8.49px] h-[8.49px] bg-[#A29BFE]   rounded-full"></div>
        <div className="w-[6.49px] h-[6.49px] bg-[#CCCCCC]  rounded-full"></div>
        <div className="w-[6.49px] h-[6.49px] bg-[#CCCCCC]  rounded-full"></div>
        <div className="w-[6.49px] h-[6.49px] bg-[#CCCCCC]  rounded-full"></div>
      </div>
    </div>
  );
}
